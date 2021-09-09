import os
from flask import Flask, render_template
from flask import Flask, send_from_directory, render_template

app = Flask(__name__)

@app.route("/luis.ico")
def favicon():
	return send_from_directory(os.path.join(app.root_path, 'imagen'),'luis.ico',mimetype='image/vnd.microsof.icon')

# Creating simple Routes 
@app.route('/test')
def test():
    return "Home Page"

@app.route('/test/about/')
def about_test():
    return "About Page"

# Routes to Render Something
@app.route('/')
def home():
    return render_template("home.html")

@app.route('/about', strict_slashes=False)
def about():
    return render_template("about.html")

# Make sure this we are executing this file
if __name__ == '__main__':
    app.run(debug=True)
