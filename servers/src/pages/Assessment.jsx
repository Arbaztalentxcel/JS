// import React from "react";

// const Assessment = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg w-96">
//         <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
//         <input type="file" className="mb-4" />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//           onClick={onClose} // Close on submit (optional, modify as needed)
//         >
//           Submit
//         </button>
//         <button
//           className="bg-gray-300 px-4 py-2 rounded"
//           onClick={onClose}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Assessment;
import React, { useState } from "react";
import axios from "axios";

const Assessment = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setErrorMessage(""); // Reset error message when a new file is selected
  };

  const handleSubmit = async () => {
    if (!file) {
      setErrorMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file); // Ensure this matches the Multer setup

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Set the questions received from the backend
      setQuestions(response.data.questions);
      onClose(); // Optionally close the modal
    } catch (error) {
      setErrorMessage("Error uploading file: " + (error.response?.data?.message || error.message));
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
        <input
          type="file"
          className="mb-4"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>

        {/* Display the questions */}
        {questions.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold">Questions:</h3>
            <ul>
              {questions.map((question, index) => (
                <li key={index} className="mt-2">{question}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
