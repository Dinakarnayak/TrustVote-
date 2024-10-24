# app.py
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import tensorflow as tf
import cv2
import numpy as np

app = Flask(__name__)

# Load pre-trained CNN model for face verification
model = tf.keras.models.load_model('models/face_verification.h5')

@app.route('/verify', methods=['POST'])
def verify_identity():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    filename = secure_filename(file.filename)
    img_path = f"./uploads/{filename}"
    file.save(img_path)

    # Process the image
    img = cv2.imread(img_path)
    img = cv2.resize(img, (224, 224))
    img = np.expand_dims(img, axis=0) / 255.0

    # Predict if the face is valid
    prediction = model.predict(img)
    is_verified = prediction[0][0] > 0.5

    return jsonify({"verified": bool(is_verified)})

if __name__ == '__main__':
    app.run(debug=True)
