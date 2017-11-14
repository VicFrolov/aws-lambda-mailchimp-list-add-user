# aws-lambda-mailchimp-list-add-user

## Adds a user to a mailchimp list using their email, first name and last name

#### 1) replace `API_KEY` and `LIST_ID` with your own.
#### 2) Run `npm install && npm run zip` in your cli.
#### 3) Upload zip to AWS Lambda, or use a delivery sytem of your choice.

* This is being called in Cognito's post-confirmation lambda trigger, so you might need to adjust `event.request.userAttributes` depending on from where you are getting this data.
