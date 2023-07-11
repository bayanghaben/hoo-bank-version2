import { useState, useEffect } from "react";
import { Review } from "./Review";
import { Form } from "./Form";
import "./reviews.css";
import React from "react";

// Reviews component
export default function Reviews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState(
    localStorage.getItem("POSTS")
      ? JSON.parse(localStorage.getItem("POSTS"))
      : []
  );

  useEffect(() => {
    // Update local storage whenever posts change
    localStorage.setItem("POSTS", JSON.stringify(posts));
  }, [posts]);

  // Function to handle adding a new post
  function handleAdd() {
    if (!content || !title) return;
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    setPosts([
      {
        id: crypto.randomUUID(),
        title: title,
        content: content,
        replay: [],
        date: `${year}/${month + 1}/${date} ${hour}:${minutes}`,
      },
      ...posts,
    ]);
    setTitle("");
    setContent("");
  }

  // Function to handle deleting a post
  function handleDeletePost(id) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }

  return (
    <>
      {/* Render the Form component for adding a new post */}
      <Form
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleAdd={handleAdd}
      />

      <hr />

      <div className="reviews">
        {/* Iterate over each post and render a Review component */}
        {posts.map((post) => (
          <Review
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            content={post.content}
            handleDeletePost={handleDeletePost}
          />
        ))}
      </div>
    </>
  );
}
