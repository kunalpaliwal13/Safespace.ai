// client/src/pages/Journal.jsx
import React, { useState } from "react";
import axios from 'axios'

export default function Journal() {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState("neutral");
  const [feedback, setFeedback] = useState("");

  const submitJournal = async () => {
    try {
      const res = await axios.post("/journal", { mood, entry });
      setFeedback(res.data.message || "Journal submitted.");
      setEntry("");
    } catch (err) {
      console.error(err);
      setFeedback("Failed to submit.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Mood Journal</h2>
      <select value={mood} onChange={(e) => setMood(e.target.value)} className="mb-2">
        <option value="happy">😊 Happy</option>
        <option value="neutral">😐 Neutral</option>
        <option value="sad">😢 Sad</option>
      </select>
      <textarea
        placeholder="Write your thoughts..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="w-full h-40 p-2 border rounded"
      />
      <button onClick={submitJournal} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
      <p className="mt-2 text-green-600">{feedback}</p>
    </div>
  );
}
