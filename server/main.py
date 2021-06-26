# Import Libraries
from sawo import createTemplate, getContext, verifyToken
from flask import Flask
from flask_cors import CORS, cross_origin
import requests

# Flask app configuration
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Main Page
@app.route("/", methods=['GET', 'POST'])
@cross_origin()
def home():
    return "Hello World!"

# Run Server
if __name__ == "__main__":
    app.run(debug=True)