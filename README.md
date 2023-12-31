# AIopoly

This project demonstrates how to leverage Vertex AI's text generation capabilities to create unique Monopoly properties based on user-provided themes. 

This Firebase Functions project is meant to work with any frontend via its callable function `/create`. A Flutter sample app that uses this is available at ...

## Key Features:

- **Creative Content Generation:** Utilizes Vertex AI's Gemini Pro model to generate original Monopoly property names and descriptions tailored to specific themes. 
- **Serverless Backend:** Employs Firebase Functions to streamline the interaction between the Flutter app and Vertex AI.
- **Theme-Based Customization:** Allows users to input their desired themes, resulting in personalized game experiences.
- **Visual Organization:** Presents the generated properties in a clear and user-friendly format, categorized by color groups.

## Technologies Used:

- **Flutter:** Multi-platform mobile app development framework for building natively compiled apps for iOS, Android, web, and desktop from a single codebase.
- **Firebase Functions:** A serverless platform for building and hosting backend services with automatic scaling and high availability.
- **Vertex AI:** A Google Cloud platform offering a suite of machine learning services, including text generation capabilities with various models.

## Getting Started:

1. Enable Vertex AI APIs in Google Cloud Console

2. Setup Firebase CLI
   * Install instructions: https://firebase.google.com/docs/cli
   * Login with the CLI
   ```bash
   firebase login
   ```

3. Setup local project
   ```bash
   # Clone the repository
   git clone https://github.com/cjwhitsitt/aiopoly-functions
   cd aiopoly-functions
   
   # Connect to Firebase
   firebase init
   # Enable Functions
   # Create a new project, if needed
   # Select overwrite codebase
   # All other defaults are fine
   ```

4. Run the Functions
   ```bash
   # Deploy
   firebase deploy
   # or run local emulator
   cd functions
   npm run serve
   ```

5. Make a request to the `/create` callable function. A ready-made Flutter app is available at https://github.com/cjwhitsitt/aiopoly-flutter.

## Usage:

1. Customize prompt and parameters in `index.js` before deploying
   ```js
   const vertex_ai = new VertexAI({project: process.env.GCLOUD_PROJECT, location: 'us-central1'});
   const model = 'gemini-pro'; // Can change to any Vertex AI model

   const generativeModel = vertex_ai.preview.getGenerativeModel({
     model: model,
     // Test different parameters in
     // Vertex AI Studio: https://console.cloud.google.com/vertex-ai/generative
     // Maker Suite: https://makersuite.google.com/
     generation_config: {
       "max_output_tokens": 2048,
       "temperature": 0.9,
       "top_p": 1
     },
   });

   // Be sure to include the dynamic parameters in your prompt.
   const prompt = `Provide Monopoly board spaces for a game themed around ${theme} in json ...`;
   ```

1. Make a request to the `/create` callable function.
   ```json
   {
     "theme": "User input here"
   }
   ```

2. Functions uses the Vertex AI client SDK for Node.js to call the Google Cloud APIs.
3. Vertex AI responds with text based on the prompt and parameters sent.
4. Functions returns the properties as a JSON response.
   ```json
   {
     "groups": [
       {
         "color": "dark blue",
         "hex": "",
         "properties": [
           {
             "name": "Boardwalk",
             "rent": 450
           }
         ]
       }
     ]
   }
   ```