from flask import Flask, render_template, url_for, request, redirect
import requests

app = Flask(__name__)


def get_products():
    data = requests.get('https://dummyjson.com/products')
    return data.json()['products']

# print(get_products())
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

@app.route('/shop-grid')
def shop_grid_view():
    return render_template('shop-grid-view.html')

@app.route('/shop-list')
def shop_list_view():
    products = get_products()


    return render_template('shop-list-view.html', products=products)

# @app.route('/wishlist')
# def wishlist_style1():
#     return render_template('wishlist-style1.html')

@app.route('/products')
def products():
    return render_template('product-layout1.html')

@app.route('/checkout')
def checkout_style1():
    return render_template('checkout-style1.html')

@app.route('/cart')
def cart_style1():
    return render_template('cart-style1.html')

@app.route('/order-success')
def order_success():
    return render_template('order-success.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000, host="0.0.0.0")