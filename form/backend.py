import json
import re
from flask import Flask
from flask import request
from flask import Response
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/api/users": {"origins": "http://localhost:3000"}})

@app.route("/api/users", methods=["POST"])
def create_user():
    payload = json.loads(request.data, strict=False)

    first_name = payload.get("first_name")
    last_name = payload.get("last_name")
    email = payload.get("email")
    phone = payload.get("phone")

    errors = {}
    errors["first_name"] = get_first_name_errors(first_name)
    errors["last_name"] = get_last_name_errors(last_name)
    errors["email"] = get_email_errors(email)
    errors["phone"] = get_phone_errors(phone)

    is_error_free = True
    for field, error in errors.items():
        if error is not None:
            is_error_free = False

    if is_error_free:
        status = 200
    else:
        status = 400

    return Response(
        json.dumps({"errors": errors}),
        status=status,
        mimetype="application/json",
    )


def get_first_name_errors(first_name):
    if type(first_name) is str and len(first_name) > 1:
        return None
    else:
        return "That doesn't look like a first name"


def get_last_name_errors(last_name):
    if type(last_name) is str and len(last_name) > 1:
        return None
    else:
        return "That doesn't look like a last name"


def get_email_errors(email):
    if email == "takenemail@gmail.com":
        return "That email is taken"
    is_valid = False
    if isinstance(email, str):
        is_valid = bool(
            re.match(
                r"^[a-zA-Z0-9_\-\.\+]+" r"@[a-zA-Z0-9_\-\.\+]+" r"\.[a-zA-Z0-9_\.\+]+$",
                email,
            )
        )
    if is_valid:
        return None
    else:
        return "That's not a valid email address"


def get_phone_errors(phone):
    error_msg = "That isn't a valid phone number"
    if type(phone) is str and len(phone) == 10 and phone[0] != "0":
        try:
            int(phone)
        except Exception:
            return error_msg
        else:
            return None
    return error_msg
