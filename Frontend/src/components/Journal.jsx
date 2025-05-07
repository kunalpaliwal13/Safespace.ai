import { useState } from "react";
import { Calendar } from "lucide-react";
import Header from "./Header";

const moods = ["Great", "Good", "Neutral", "Bad", "Terrible"];
const emojis = ["😄", "🙂", "😐", "😕", "😞"];

export default function MoodJournal() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSubmit = () => {
    if (note.length >= 5 && date && selectedMood !== null) {
      const newEntry = {
        date,
        mood: moods[selectedMood],
        emoji: emojis[selectedMood],
        note,
      };
      setEntries([newEntry, ...entries]);
      setNote("");
      setSelectedMood(null);
    }
  };

  return (
    <div className=" font-sans text-gray-800 bg-white w-screen ">
      <Header/>
      <h2 className="text-2xl mt-10 justify-items-start font-bold flex items-start gap-2 text-gray-800 mb-4 px-70">
        📔 Mood Journal
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-70">
        {/* New Entry */}
        <div className="col-span-2 bg-white rounded-xl shadow border p-6">
          <h3 className="text-lg font-semibold mb-1">🖋 New Entry</h3>
          <p className="text-sm text-gray-500 mb-4">
            Record how you're feeling today
          </p>

          <label className="text-sm font-medium flex items-center gap-2 mb-2">
            📅 Date
          </label>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <label className="text-sm font-medium mb-2 block">😊 Mood</label>
          <div className="flex gap-2 flex-wrap mb-4">
            {moods.map((mood, idx) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(idx)}
                className={`border rounded-full px-4 py-2 flex items-center gap-1 ${
                  selectedMood === idx
                    ? "bg-purple-700 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                <span>{emojis[idx]}</span> {mood}
              </button>
            ))}
          </div>

          <label className="text-sm font-medium mb-2 block">📝 Notes</label>
          <textarea
            rows="4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border rounded p-3 w-full mb-2"
            placeholder="How are you feeling today? What made you feel this way?"
          ></textarea>
          <p className="text-xs text-gray-500 mb-4">
            Write at least 5 characters about your day and feelings
          </p>

          <button
            onClick={handleSubmit}
            className="bg-purple-700 text-white px-5 py-2 rounded-lg"
          >
            Save Entry
          </button>
        </div>

        {/* Mood Review */}
        <div className="bg-white rounded-xl shadow border p-6">
          <h3 className="text-lg font-semibold mb-1">😊 Mood Review</h3>
          <p className="text-sm text-gray-500 mb-4">
            Analysis of your mood patterns
          </p>

          <div className="text-sm mb-2">
            <p className="font-medium">Journal Entries</p>
            <p>{entries.length} entries recorded</p>
          </div>

          {entries.length > 0 && (
            <>
              <div className="text-sm mt-4 mb-2">
                <p className="font-medium">Most Common Mood</p>
                <p className="flex items-center gap-2">
                  {emojis[selectedMood]}{" "}
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-sm">
                    {moods[selectedMood]}
                  </span>
                </p>
                <p className="text-gray-500">50% of the time</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Recent Entries */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">📅 Recent Entries</h3>
        {entries.map((entry, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border p-4 mb-2 shadow-sm"
          >
            <p className="text-sm text-gray-500 flex items-center gap-2 mb-1">
              {entry.date}{" "}
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-sm">
                {entry.emoji} {entry.mood}
              </span>
            </p>
            <p className="text-sm">{entry.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
