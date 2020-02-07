# Learning OAuth 2.0

Here I am learning OAuth 2.0. I found [OAuth 2 Simplified](https://aaronparecki.com/oauth-2-simplified/) helpful.

OAuth defines four roles:

1. The Third-Party Application: "Client"
2. The API: "Resource Server"
3. The Authorization Server
4. The User: "Resource Owner"

For small implementations the resouce and authorization server roles might be done by a single server.

There is an initial configuration step called "Creating an App" that you must do on the Authorization server. This is so that the Callback URL is protected. At the end of this step you will get a Client ID and optionally a Secret. The Client ID will be public. Hence the Callback URL must be secret.

## 3-LO (three-legged OAuth) flow

The 3-LO flow is for client/server style web apps. Here is a diagram of the 3-LO flow.

## 2-LO (two-legged OAuth) flow

The 2-LO flow for user not present.

TODO

## Implicit flow

The implicit flow caters for native mobile apps and Single Page Applications (SPAs). It requires end to end HTTPS to protect the auth token. [This](https://stackoverflow.com/questions/13387698/why-is-there-an-authorization-code-flow-in-oauth2-when-implicit-flow-works-s) Stackoverflow post explains the difference between 3-LO and implicit well.

## How to execute the 3-LO example

For my example I am authorising to the Bitbucket API. I followed [this doc](https://confluence.atlassian.com/bitbucket/oauth-on-bitbucket-cloud-238027431.html). To create my app on Bitbucket I did the following:

1. Log into [Bitbucket.org](https://bitbucket.org/)
2. Go to Personal Settings
3. Go to OAuth
4. Under OAuth Consumers press the Add Consumer button.
5. Give the app a name and set the callback URL to the Firebase function URL (process below).
6. Make a note of the key (client ID) and secret.

I am using Firebase functions for my callback function.

1. You will need a firebase account
2. The function in /functions is the callback function.
3. Create a Firebase project (must be paid to make external API calls).
4. Set the client ID and secret as function config: `firebase functions:config:set bitbucket.clientid="[CLIENT_ID]" bitbucket.secret="[SECRET]"`.
5. Deploy the function: `firebase deploy`.
6. Make a note of the function URL.
7. Update the Bitbucket app config with the function URL.

Initiate the process by visiting this link: [https://bitbucket.org/site/oauth2/authorize?client_id=CLIENT_ID&response_type=code](https://bitbucket.org/site/oauth2/authorize?client_id=CLIENT_ID&response_type=code). Be sure to replace CLIENT_ID with your Bitbucket client ID.
