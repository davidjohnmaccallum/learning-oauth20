const functions = require("firebase-functions");
const request = require("request");

exports.helloWorld = functions.https.onRequest((req, res) => {
  console.log("Config", functions.config());

  const clientId = functions.config().bitbucket.clientid;
  const secret = functions.config().bitbucket.secret;

  console.log("Request URL:", req.url);

  // Note, you will need a paid Firebase account to make this call.
  request.post(
    {
      uri: "https://bitbucket.org/site/oauth2/access_token",
      auth: {
        user: clientId,
        pass: secret
      },
      formData: {
        grant_type: "authorization_code",
        code: req.query.code
      }
    },
    (err, res1) => {
      if (err) {
        console.log("Error getting auth token", err);
      } else {
        console.log("Auth Token", res1.body);
      }
    }
  );

  res.send("Okay");
});
