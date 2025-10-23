# INEUit — AI Text Detection App

INEUit is an AI Text Detection web application built as a project for my Elective class.
The app analyzes text input and determines whether it was written by a human or AI.

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
