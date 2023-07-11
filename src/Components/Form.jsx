import "./form.css";
export function Form({ title, content, setContent, setTitle, handleAdd }) {
  return (
    <form className="container">
      <div className=" form-wrapper">
        <div>
          <input
            className="form-input "
            type="text"
            placeholder="Enter your name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          {/* Input field for entering the name */}
          <textarea
            className="text-area-form"
            placeholder="Enter your review here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>{" "}
          {/* Textarea for entering the review content */}
        </div>
        <div className="form-btn " onClick={handleAdd}>
          Add Review
        </div>
        {/* Button to add the review */}
      </div>
    </form>
  );
}
