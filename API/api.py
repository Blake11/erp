from eve import Eve
from flask_cors import CORS

app = Eve(settings="settings.py")
CORS(app)


def before_POST(resource, request, payload):
    print(resource)
    print(request)
    print(payload.data)


app.on_post_POST = before_POST

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000", debug=True)
