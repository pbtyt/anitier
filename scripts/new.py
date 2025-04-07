import argparse
from pathlib import Path

def create_component_structure(layer: str, filename: str) -> None:
    if layer.lower() == "shared":
        print("Skipping generation for shared layer.")
        return

    src_dir = Path("../src").resolve()
    if not src_dir.exists():
        raise FileNotFoundError(f"Source directory '{src_dir}' not found.")

    layer_dir = src_dir / layer
    layer_dir.mkdir(exist_ok=True)

    folderName = filename[0].lower() + filename[1:]
    component_dir = layer_dir / folderName
    component_dir.mkdir(exist_ok=True)

    ui_dir = component_dir / "ui"
    ui_dir.mkdir(exist_ok=True)

    # Create index.ts
    index_content = f"export {{ {filename} }} from './ui/{filename}'\n"
    index_path = component_dir / "index.ts"
    safe_write(index_path, index_content)

    # Create SCSS module
    scss_content = ".wrapper {}\n"
    scss_path = ui_dir / f"{filename}.module.scss"
    safe_write(scss_path, scss_content)

    # Create TSX component
    tsx_content = f"""import styles from './{filename}.module.scss'

export function {filename}() {{
    return (
        <div className={{styles.wrapper}}>
        </div>
    );
}}
"""
    tsx_path = ui_dir / f"{filename}.tsx"
    safe_write(tsx_path, tsx_content)

    print(f"Component '{filename}' created successfully in {layer} layer.")

def safe_write(path: Path, content: str) -> None:
    if path.exists():
        print(f"File '{path}' already exists. Skipping.")
        return
    path.write_text(content, encoding="utf-8")

def main():
    parser = argparse.ArgumentParser(description="Component structure generator")
    parser.add_argument("--g", action="store_true", help="Enable generation mode")
    parser.add_argument("--layer", "--l", help="Target layer for component")
    parser.add_argument("--filename", "--fn", "-f", help="Component name")
    
    args = parser.parse_args()
    
    if args.g:
        if not args.layer or not args.filename:
            parser.error("Both --layer and --filename are required in generation mode")
        create_component_structure(args.layer, args.filename)
    else:
        parser.print_help()

if __name__ == "__main__":
    main()