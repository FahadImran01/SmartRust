import React, { useState } from 'react';
import '../styles/upload.css';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0); // 1 = Upload, 2 = Analyze, 3 = Result

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please select an image first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);

    try {
      setLoading(true);
      setStep(2);

      const response = await fetch('http://localhost:8000/api/predict/', {
  method: 'POST',
  body: formData,
});

      const data = await response.json();
      console.log("Prediction response:", data);
      setResult(data.result);
      setRecommendation(data.recommendation || '');
      setStep(3);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Something went wrong while analyzing the image.');
      setStep(1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-page">
      <h2>Wheat Disease Detection</h2>

      {/* Step Bar */}
      <div className="step-bar">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>
          <div className="circle">1</div>
          <p>Upload</p>
        </div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>
          <div className="circle">2</div>
          <p>Analyze</p>
        </div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>
          <div className="circle">3</div>
          <p>Result</p>
        </div>
      </div>

      {/* Upload Form */}
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit" disabled={loading}>Analyze Image</button>
      </form>

      {/* Preview */}
      {preview && (
        <div className="preview">
          <h3>Image Preview</h3>
          <img src={preview} alt="Preview" />
        </div>
      )}

      {/* Loading */}
      {loading && <p className="loading-text">Analyzing image...</p>}

      {/* Result */}
      {result && (
        <div className="result">
          <h3>Disease Prediction:</h3>
          <p>{result}</p>
           {recommendation && (
      <>
        <h4>Recommendation:</h4>
        <p>{recommendation}</p>
      </>
    )}
        </div>
      )}
    </div>
  );
};

export default Upload;
