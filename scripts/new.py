import argparse
from os import chdir, mkdir
from os.path import isdir as is_dir_exist

arg_parser = argparse.ArgumentParser(description="TEXT")

arg_parser.add_argument("--g", action='store_true', help="Gen Mode")
arg_parser.add_argument("--layer", "--l", help="Layer", required=True)
arg_parser.add_argument("--filename", "--fn", "-f", help="File Name", required=True)

args = arg_parser.parse_args()

if args.g:
	if args.layer == "shared": exit()

	chdir("../src/")
	if (not is_dir_exist(args.layer)):
		mkdir(args.layer)

	chdir(args.layer)

	mkdir(args.filename.lower())
	chdir(args.filename.lower())

	mkdir("ui")

	with("index.ts", "w") as file:
		file.write(f"export '{{' {args.filename} '}}' from './ui/{args.filename}")

	chdir("ui")

	file = open(f"{args.filename}.module.scss", "x")
	file.close()

	with open(f"{args.filename}.tsx", "w") as file:
		file.writelines(
			[f"import styles from './{args.filename}.module.scss'",
			 f"export function {args.filename}() '{{'",
			 f"\treturn (",
			 f"\t\t<div className='{{'styles.wrapper'}}'>",
			 f"\t\t</div>",
			 f"\t);",
			 f"'}}'"
			]
		)

if not args.g:
	arg_parser.print_help()