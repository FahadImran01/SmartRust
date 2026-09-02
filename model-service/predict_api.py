from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io

app = Flask(__name__)

model = load_model("wheat_leaf2_checkpoint.keras")  # Path to your saved model

class_labels = ["Black Rust", "Brown Rust","Healthy" , "Yellow Rust", "unknown"]  # Modify as per your model

recommendations = {
    "Black Rust": "Use fungicides like Propiconazole. Remove infected debris.(for more information go to recommendations and visit Black Rust page)",
    "Brown Rust": "Apply Mancozeb-based fungicides. Use resistant varieties.(for more information go to recommendations and visit Brown Rust page)",
    "Healthy": "No action needed. Maintain regular monitoring.",
    "Yellow Rust": "Use Triazole fungicides. Avoid overhead irrigation.(for more information go to recommendations and visit yellow Rust page)",
    "unknown": "Unable to identify. Please upload a clearer image or consult an expert."
}

def preprocess_image(img):
    img = img.resize((299, 299))  # Adjust to your model input
    img = np.array(img) / 255.0
    img = np.expand_dims(img, axis=0)
    return img

@app.route("/predict", methods=["POST"])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']
    image = Image.open(io.BytesIO(file.read())).convert("RGB")
    processed = preprocess_image(image)

    prediction = model.predict(processed)
    predicted_class = class_labels[np.argmax(prediction)]
    recommendation = recommendations.get(predicted_class, "No recommendation available.")
   
    return jsonify({
    "prediction": predicted_class,
    "recommendation": recommendation
})

if __name__ == "__main__":
    app.run(port=5000)
