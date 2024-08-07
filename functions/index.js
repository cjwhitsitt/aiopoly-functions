const {onRequest, onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {VertexAI} = require('@google-cloud/vertexai');

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Enable Vertex AI in Cloud Console: https://cloud.google.com/vertex-ai/docs/start/client-libraries
// When using Firebase Functions, your instance won't require an extra service account to access Google's AI APIs.
// Test your prompts in the Cloud Console from the Vertex AI Studio: https://console.cloud.google.com/vertex-ai/generative?project=aiopoly
// After testing, get the code for different client SDKs from within the Vertex AI Studio.
exports.create = onCall(async (request) => {
  const theme = request.data.theme;

  // Initialize Vertex with your Cloud project and location
  const vertex_ai = new VertexAI({project: 'aiopoly', location: 'us-central1'});
  // Available models: https://cloud.google.com/vertex-ai/docs/generative-ai/learn/models
  const model = 'gemini-1.5-flash';

  // Instantiate the models
  const generativeModel = vertex_ai.preview.getGenerativeModel({
    model: model,
    // Test different parameters in the Vertex AI Studio: https://console.cloud.google.com/vertex-ai/generative?project=aiopoly
    generation_config: {
      "max_output_tokens": 2048,
      "temperature": 0.9,
      "top_p": 1
    },
  });

  // Be sure to include the dynamic parameters in your prompt.
  // Note: An earlier version of this didn't have a comma at the end of the "hex" line. The response occasionally didn't have one either.
  const prompt = `Provide Monopoly board spaces for a game themed around ${theme} in json matching the following format without markdown annotation or any other root objects:
{
  "groups": [
    {
      "color": "dark blue",
      "hex": "#295DAB",
      "properties": [
        {
          "name": "Boardwalk",
          "rent": 450
        }
      ]
    }
  ]
}
`;

  const req = {
    contents: [{role: 'user', parts: [{text: prompt}]}],
  };

  const content = await generativeModel.generateContent(req);
  const string = content.response.candidates.at(0).content.parts.at(0).text;
  const obj = JSON.parse(string);
  console.log(obj);
  return obj;
});
