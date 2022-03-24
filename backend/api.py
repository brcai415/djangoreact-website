from operator import methodcaller
from flask import Flask
from flask_cors import CORS, cross_origin
from flask import request, jsonify, logging

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/test', methods = ['POST'])
@cross_origin()
def test():
    data = request.get_json()
    firstNumber = data['firstNum']
    secondNumber = data['secondNum']

    sum = int(firstNumber) + int(secondNumber) 
    return jsonify({'ans': sum})

@app.route('/', methods=['GET'])
@cross_origin()
def helloworld():
    return "hello world"