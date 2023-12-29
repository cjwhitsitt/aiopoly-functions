const {onRequest, onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.create = onCall((request) => {
    // Placeholder to return static values
    return {
        groups: [
            {
                color: 'orange',
                hex: '#FF9600',
                properties: [
                    {
                        name: 'Santa\'s Workshop',
                        rent: 450,
                    },
                ],
            },
        ],
    };
});
