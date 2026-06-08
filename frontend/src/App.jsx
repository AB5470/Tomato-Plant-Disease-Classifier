import React, { useState } from 'react';

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setData(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      console.error("Error predicting:", error);
      alert("Backend se connect nahi ho pa rha hai! Check karo ki uvicorn server chal rha hai ya nahi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center py-10 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-emerald-800 drop-shadow-sm">
          Tomato Plant Disease Classifier
        </h1>
        <p className="text-emerald-600 mt-2 font-medium">
          Upload a leaf image to detect the infection instantly
        </p>
      </header>

      <main className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
        {/* Dropzone / Upload Area */}
        <div className="w-full border-2 border-dashed border-emerald-300 rounded-xl p-4 flex flex-col items-center justify-center bg-emerald-50/50 min-h-[200px] relative">
          {preview ? (
            <img src={preview} alt="Preview" className="max-h-56 rounded-lg object-cover shadow-sm" />
          ) : (
            <div className="text-center space-y-2 text-emerald-700">
              <span className="text-4xl">🍃</span>
              <p className="text-sm font-medium">Drag & drop or click to choose leaf image</p>
            </div>
          )}
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            className="absolute inset-0 opacity-0 cursor-pointer" 
          />
        </div>

        {/* Buttons */}
        {selectedFile && (
          <button
            onClick={handleUpload}
            disabled={loading}
            className={`w-full mt-5 bg-emerald-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-emerald-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? "Analyzing Leaf..." : "Predict Disease"}
          </button>
        )}

        {/* Results Display */}
        {data && (
          <div className="w-full mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2">
            <h3 className="text-sm font-semibold text-emerald-800 uppercase tracking-wider">Analysis Result</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Detected Condition:</span>
              <span className="text-lg font-bold text-emerald-900">{data.class}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Confidence Level:</span>
              <span className="text-sm font-bold bg-emerald-200 text-emerald-800 px-2.5 py-0.5 rounded-full">{data.confidence}</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}