# Tomato Plant Disease Classifier 🍅🤖

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361dafb) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)

An advanced, production-ready Full-Stack Web Application that leverages Deep Learning to detect and classify tomato leaf diseases with high accuracy. Upload a leaf image, and get instant diagnosis and health metrics!

---

## 🚀 Key Features
- **Intelligent Core:** Powered by a Convolutional Neural Network (CNN) `.h5` model built with TensorFlow/Keras.
- **Blazing Fast API:** Asynchronous backend powered by FastAPI for ultra-low latency predictions.
- **Modern User Experience:** Slick, fully responsive frontend UI crafted using React, Vite, and Tailwind CSS.
- **Instant Diagnostics:** Drag-and-drop image upload feature with real-time accuracy percentages.

---

## 📸 Screenshots & UI Preview

Here is a live look at the user interface and prediction workflow:

| 🖥️ Main Upload Dashboard | 📊 Live Prediction Result |
|:---:|:---:|
| ![Dashboard Screenshot](Dashboard_Screenshot.jpg) | ![Prediction Screenshot](Prediction_Screenshot.jpg) |

---

## 🛠️ System Architecture & Tech Stack

```text
  [ User Interface ]  --->  [ FastAPI Backend ]  --->  [ TensorFlow CNN Model ]
  (React + Tailwind)         (python-multipart)             (Tomato_Model.h5)

💻 How to Setup and Run Locally
1. Clone the Project
Bash
git clone [https://github.com/AB5470/Tomato-Plant-Disease-Classifier.git](https://github.com/AB5470/Tomato-Plant-Disease-Classifier.git)
cd Tomato-Plant-Disease-Classifier

2. Spin Up the Backend Server (FastAPI)
Bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn tensorflow pillow python-multipart
uvicorn main:app --reload
Backend will be active at: http://localhost:8000

3. Launch the Frontend UI (React)
Bash
cd ../frontend
npm install
npm run dev
Frontend will be active at: http://localhost:5173

📂 Project Directory Structure
Plaintext
Tomato-Plant-Disease-Classifier/
├── backend/                  # FastAPI Application & ML Model
│   ├── main.py               # Main API endpoints (/predict, /ping)
│   ├── tomato_model.h5       # Pre-trained Deep Learning Model
│   └── venv/                 # Virtual Environment
├── frontend/                 # React SPA (Single Page Application)
│   ├── src/                  # Components and Frontend Logic
│   ├── package.json          # Dependencies configuration
│   └── vite.config.js
└── .gitignore                # Restricts heavy dependencies from GitHub

---
## 👥 Authors & Contributors
- **Aayush Bhardwaj** - *Lead Developer* ([@AB5470](https://github.com/AB5470))
- **Sahdev Kumar** - *Contributor
