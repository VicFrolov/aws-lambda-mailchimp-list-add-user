'use strict';

const Mailchimp = require('mailchimp-api-v3');
const API_KEY = 'YOUR_API_KEY';
const LIST_ID = 'YOUR_LIST_ID';

function addToList(emailAddress, firstName, lastName, callback) {
    const mailchimp = new Mailchimp(API_KEY);

    mailchimp.request({
        method: 'post',
        path: `/lists/${LIST_ID}/members`,
        body: {
            email_address: emailAddress,
            status: 'subscribed',
            merge_fields: {
                "FNAME": firstName,
                "LNAME": lastName
            }
        }
    }).then(function(result) {
        console.log(`SUCCESS:\n ${result}`)
    }).catch(function (err) {
        console.log(`FAILURE:\n ${err}`)
    });
}

exports.handler = function(event, context, callback) {
    const emailAddress = event.request.userAttributes.email;
    const firstName = event.request.userAttributes.given_name;
    const lastName = event.request.userAttributes.family_name;
    addToList(emailAddress, firstName, lastName);
    callback(null, event);
}

