
import React, { useState } from 'react';
import axios from 'axios';

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload a file");

    const formData = new FormData();
    formData.append('pdfFile', file);

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(res.data || 'No recommendations found.');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file, please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderResponse = (data) => {
    if (typeof data === 'string') return <p>{data}</p>;

    return (
      <div className="response-container">
        <h3 className="font-semibold text-lg">Current Strengths and Expertise:</h3>
        {data.currentStrengthsAndExpertise.length > 0 ? (
          <ul className="list-disc ml-6">
            {data.currentStrengthsAndExpertise.map((strength, index) => (
              <li key={index}>
                <strong>{strength.title}:</strong> {strength.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No strengths and expertise available.</p>
        )}

        <h3 className="font-semibold text-lg">Career Path Recommendations:</h3>
        {data.careerPathRecommendations.length > 0 ? (
          <ul className="list-disc ml-6">
            {data.careerPathRecommendations.map((item, index) => (
              <li key={index}>
                <strong>Year {item.year} - {item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No career path recommendations available.</p>
        )}

        <h3 className="font-semibold text-lg">Skill Gap Analysis:</h3>
        {data.skillGapAnalysis.length > 0 ? (
          <ul className="list-disc ml-6">
            {data.skillGapAnalysis.map((skill, index) => (
              <li key={index}>
                <strong>{skill.skill}:</strong> {skill.description}
                <div>
                  <strong>Resources:</strong>
                  <ul className="list-disc ml-6">
                    {skill.resources.map((resource, idx) => (
                      <li key={idx}>{resource}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Recommended Projects:</strong>
                  <ul className="list-disc ml-6">
                    {skill.recommendedProjects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No skill gap analysis available.</p>
        )}

        <h3 className="font-semibold text-lg">Training and Skill Development:</h3>
        {data.trainingAndSkillDevelopment.length > 0 ? (
          <ul className="list-disc ml-6">
            {data.trainingAndSkillDevelopment.map((skill, index) => (
              <li key={index}>
                <strong>{skill.skill}:</strong> {skill.description}
                <div>
                  <strong>Resources:</strong>
                  <ul className="list-disc ml-6">
                    {skill.resources.map((resource, idx) => (
                      <li key={idx}>{resource}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Recommended Projects:</strong>
                  <ul className="list-disc ml-6">
                    {skill.recommendedProjects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No training and skill development information available.</p>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      {!response && <form onSubmit={handleSubmit} className="flex flex-col h-[calc(100vh-32px)] justify-center items-center">
        <h2 className="text-lg font-semibold">Upload Resume</h2>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="mt-4 border rounded p-2"
        />
        <button type="submit" className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? 'Uploading...' : 'Submit'}
        </button>
      </form>}

      {response && (
        <div className="response mt-4 mx-auto p-4 border rounded bg-gray-100 w-3/4 bg-[#cccfff]">
          <h2 className="font-bold">Response:</h2>
          {renderResponse(response)}
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;


