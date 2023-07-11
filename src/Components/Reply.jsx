import { useState } from "react";
import { logo } from "../assets";
import "./reply.css";
// Replay component
export function Replay({ replay, replays, setReplays }) {
  const [isEditing, setIsEditing] = useState(false);

  // Function to update the replay content
  function onChangeReplay(preReplay) {
    setReplays(
      replays.map((r) => {
        if (r.id === preReplay.id) {
          return preReplay;
        } else return r;
      })
    );
  }

  // Function to delete a replay
  function handleDeleteReplay(id) {
    setReplays(replays.filter((el) => el.id !== id));
  }

  let replayContent;
  // Check if editing mode is enabled
  if (isEditing) {
    // Show form input when in editing mode
    replayContent = (
      <input
        className="edit-reply-input"
        value={replay.replay}
        onChange={(e) => {
          onChangeReplay({
            ...replay,
            replay: e.target.value,
          });
        }}
      />
    );
  } else {
    // Show replay content in non-editing mode
    replayContent = <span className="">{replay.replay}</span>;
  }

  return (
    <div className=" reply-container" key={replay.id}>
      <div className="reply-img-wrapper">
        {/* // Bank avatar image */}
        <img
          className="bank-img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJrSURBVHgBxZZRbtNAEIZnNhHPfgSBiH2ChhPg3gDeK2pOkHICwgncGySggHhrbuD0BE1PYBe1ymMjAVIj2R5mbZNsm8a7Thz3UzZer2d3/x3P7hihAkfhzAWRuoB4gIRdArIJ0PveefEVdqCtM/DC0IrFsxME7PGkFgACkPwR1EWpCLnyRNCAq3Z9U64jNj04uro+BUEBT27Dnmk/LuBmyG4/hoYQ6wLYAw0KkLTvC7jps4AeNMzSE144s1nAZ3gClp6IW+gDGe2BOW/QUxRi8ju+uxw7zhx2BOWfF153YyEuDKzHf5LFxzomVsk8kbRaPb0XqD96/fIL7IE8JojcMiOWF406KwFEfFwT+VxuKSe8jZOBbIctaMtTUeaAMiNK0/eKgC5fAi6WYmJbLeHx1eXnh4gYQQUECDwoM+C3NP3hvJoqTWcPBKjYXAZQEX4dZJUaIExWgsgD/THuFt4yF4FUPqiMB+W21Gtb2GW0v3We62zmo6Ly4dfMKIFTvvPzOmVZ2Csx9+TuiKCclWtTvAQTEWmi2tka87kUcQWGIlpwNyadaILxg0DWxUcmYqoxkoHmysqQT0q5XTcJke0xLT4t7/NALg183s7ngv+kCN0xvExscpVJioeEOPzfDzNR1P+bLt78dJyoEGCr/TYwAUWxT3p8MIRtLS4XBmMeq51cMuNMdzQXR7qJAFobixsCw44hl0Eh3FJW7hbtpviPraBLzRHSJo/ygxNqhnegeadD2i9mn5B7FFLtG1Z2oHrZ7iueO3qUB9EuBFQxtdcpJuDy1mR8hAoUg7pFseF+howgz0MTLudFOjDiH35PXhnnf5mXAAAAAElFTkSuQmCC"
          alt="img"
        />
        <div className="">
          <div className=" ">
            {/* // User name or title */}
            <h4 className="reply-bank-nam">Hoo Bank</h4>
          </div>
          {/* // Replay date */}
          <span className="reply-date">{replay.date}</span>
          <div className="reply-content">{replayContent}</div>
        </div>
      </div>

      <div className="edit-btn-container ">
        {/* // Button to toggle editing mode */}
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-solid fa-pen-to-square"></i>
          )}
        </button>
        {/* // Button to delete the replay */}
        <button onClick={() => handleDeleteReplay(replay.id)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}
