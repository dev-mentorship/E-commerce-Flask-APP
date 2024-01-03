from flask import Flask, render_template, url_for, request, redirect

app = Flask(__name__)

@app.route('/index')
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/wishlist')
def wishlist():
    return render_template('wishlist-style1.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        usrEmail = request.form.get('customer[email]')
        usrPassword = request.form.get('customer[password]')

        if usrPassword == 'admin':
            return redirect('wishlist')
        else:
            return redirect('index')

    # print(f"Username: {usrEmail}, password: {usrPassword}")
    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True, port=5000, host="0.0.0.0")