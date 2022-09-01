# Create a sign up form

For this interview, you will be creating a sign up form. The form will has the following fields
- First name 
- Last name
- Email
- Phone number

The sign up form should have similar behavior to [Twilio's sign up form](https://www.twilio.com/try-twilio). That is, is should:

- Perform client side validation (display errors when user enters invalid data)
- Only allow form submission if client side checks pass
- Look and behave similar (for example, focusing on an element should lift and shrink the placeholder text and change the underline color)
- Submit data to a backend

Data should be POST'd to `localhost:5000/api/users` and should have the following format:
```
{
    "first_name": "John",
    "last_name": "Smith",
    "email": "john@gmail.com",
    "phone": 8025988313
}
```

The backend will validate input, including checking whether the email is already taken. If the input is valid, the response will be status 200 and look like this:

```
{"errors": {"first_name": None,
            "last_name": None", 
            "email": None, 
            "phone": None}}
```

If the input fails the backend's validation, the response will look something like this:

```
{"errors": {"first_name": "That doesn't look like a first name", 
            "last_name": None", 
            "email": "That email is taken", 
            "phone": None}}
```

*Note:* You can use the email address `takenemail@gmail.com` to simulate an email address that's already registered.

Upon submission, you should display errors to the user.


##### Use discretion to create good UI/UX! 
You don't have to exactly copy Twilio's form behavior. That said, aim to have a good user experience that won't surprise or frustrate people.
