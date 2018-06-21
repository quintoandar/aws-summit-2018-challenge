# This is a sample incomplete python webserver

from flask import Flask, jsonify, request
app = Flask(__name__)
import requests

@app.route('/', methods=["GET"])
def hello():
    # implement me!

if __name__ == '__main__':
    app.run()
