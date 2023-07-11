import { useState, useEffect } from "react";
import { Replay } from "./Reply";
import "./replys.css";

// Replays component
export function Replays() {
  const [replay, setReplay] = useState("");
  const [replays, setReplays] = useState(
    localStorage.getItem("REPLAYS")
      ? JSON.parse(localStorage.getItem("REPLAYS"))
      : []
  );

  useEffect(() => {
    // Update local storage whenever replays change
    localStorage.setItem("REPLAYS", JSON.stringify(replays));
  }, [replays]);

  // Function to handle adding a new replay
  function handleAddReplay(e) {
    e.preventDefault();
    if (!replay) return;
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    setReplays([
      ...replays,
      {
        id: crypto.randomUUID(),
        replay: replay,
        date: `${year}/${month + 1}/${date} ${hour}:${minutes}`,
      },
    ]);
    setReplay("");
  }

  return (
    <>
      {/* Iterate over each replay and render a Replay component */}
      {replays.map((replay) => {
        return (
          <Replay
            key={replay.id}
            replay={replay}
            replays={replays}
            setReplays={setReplays}
          />
        );
      })}

      <form className="form-replay" onSubmit={handleAddReplay}>
        {/* Input field for entering a new replay */}
        <input
          className="form-replay-input"
          value={replay}
          onChange={(e) => setReplay(e.target.value)}
          type="text"
          placeholder="Replay..."
        />
        {/* Button to add a new replay */}
        {replay ? (
          <button className="form-replay-btn" onClick={handleAddReplay}>
            Reply
          </button>
        ) : null}
      </form>
    </>
  );
}
