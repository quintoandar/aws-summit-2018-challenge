from flask import Flask, jsonify, request
app = Flask(__name__)
import requests


@app.route('/', methods=["GET", "POST"])
def hello():
    payload = request.get_json()
    print (payload)
    payload = {
        "company": "QuintoAndar",
        "contactOptIn": True,
        "email": "dqueiroz@quintoandar.com.br",
        "name": "Didi do QuintoAndar",
        "phone": "+5511947073916"
    }
    return jsonify(
        requests.post(
            "https://aws-challenge.quintoandar.com.br/contact/",
            json=payload).json())


if __name__ == '__main__':
    app.run()
