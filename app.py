from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/intro')
def play():
    return render_template('intro.html')

@app.route('/load')
def load():
    return render_template('load.html')

@app.route('/play')
def game():
    return render_template('play.html')

if __name__ == '__main__':
    app.run(debug=True)