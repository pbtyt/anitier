import urllib.request as request
import urllib.error as request_error
import json

from os import environ as env 
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

BEARER_TOKEN = env.get("BEARER_TOKEN")
BASE_API_URL = "http://localhost:4200/api"
HEADERS = {
	"Content-Type": "application/json",
	"Authorization": f"Bearer {BEARER_TOKEN}"
}

def make_post(url, data) -> request.Request:
	json_data = json.dumps(data).encode('utf-8')

	return request.Request(f"{BASE_API_URL}/{url}", data=json_data, headers=HEADERS, method="POST")

def main():
	try:
		url = "card/episodes/cm9eth5ol0000utkgez0lcxw2"
		data = {
			"title": "SSS-tier Hunter"
		}
		
		with request.urlopen(make_post(url, data)) as response:
			response_body = response.read().decode('utf-8')
			print("Статус код:", response.status)
			print("Ответ сервера:", response_body)

	except request_error.HTTPError as e:
		print(f"Ошибка HTTP: {e.code} {e.reason}")
		print(e.read().decode())

	except request_error.URLError as e:
		print(f"Ошибка URL: {e.reason}")

if __name__ == '__main__':
	main()