from flask import Flask, render_template, url_for
import time

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')




## FIRST ATTEMPT
# @app.route('/bla')
# def background_process_test():
#     print('Hello')
    
#     return 'nothing'


## SECOND ATTEMPT
# @app.route('/your_flask_function')
# def get_ses():
#  	print('wowowowowo')


if __name__ == "__main__":
    app.run(debug=True)