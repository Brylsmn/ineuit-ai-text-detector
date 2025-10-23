# INEUit — AI Text Detection App

INEUit was initially powered by ZeroGPT’s detection model through an API.
Later, I remade and enhanced the app to use my own fine-tuned DistilBERT model, allowing me to experiment with deploying and connecting a custom NLP model to a frontend interface.

This project primarily demonstrates my knowledge of frontend development and API integration — not the accuracy of AI detection itself.
The fine-tuned model’s predictions are not entirely accurate and serve only as a proof of concept.

# Project Overview

Originally, INEUit used ZeroGPT’s detection model through an API integration.
It has since been remade and improved to use my own fine-tuned DistilBERT model, resulting in a more accurate and personalized detection system.

This project demonstrates how a machine learning model hosted on Hugging Face Spaces can be seamlessly integrated into a frontend web app for real-world AI applications.

# Live Demo

Try the app here: https://ineuit.vercel.app/

**Note:**
The app’s functionality depends on the availability of the model hosted on Hugging Face Spaces.
If the Space is inactive or sleeping, the app may take time to load or may not respond until the Space is running again.

# Tech Stack

-Frontend: React (Vite + Tailwind CSS)
-Model Backend: Fine-tuned DistilBERT hosted on Hugging Face Spaces
-Deployment:
 -Frontend on Vercel
 -Model API on Hugging Face Spaces

**Note:**
INEUit does not use a separate backend server.
The frontend communicates directly with the Hugging Face API endpoint where the model is deployed.

# License
This project is for **educational** and **portfolio demo** purposes only.
Models and datasets used belong to their respective owners.
