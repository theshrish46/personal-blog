"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleBlogSubmit = () => {
    // Handle the submission of the blog post data (title and content)
    // You can send this data to your server or save it in your preferred way.
  };

  return (
    <div className="container">
      <h2>Add a New Blog Post</h2>
      <form onSubmit={handleBlogSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border rounded"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block font-bold text-lg mb-2">
            Content
          </label>
          <ReactQuill value={content} onChange={handleContentChange} />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
