from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shop.db'
db = SQLAlchemy

@app.route('/')
@app.route('/home')
def index():
	return render_template('index.html')

if __name__ == "__main__":
	app.run(debug=True)