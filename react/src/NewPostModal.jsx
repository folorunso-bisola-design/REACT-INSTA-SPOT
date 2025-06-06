import React, { useState } from "react";

function NewPostModal({ onClose, onAddPost }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPost = {
          src: reader.result,
          title,
        };
        onAddPost(newPost);
        onClose();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <dialog open className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-content bg-white p-6 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4">New Post</h2>
        <form id="newPostForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="postTitle"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            minLength={3}
            maxLength={30}
            className="border p-2 w-full mb-4"
          />
          <input
            type="file"
            id="postImage"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            required
            className="mb-4"
          />
          <button
            type="submit"
            className="Update-btn bg-blue-500 text-white px-4 py-2 rounded w-full mb-2"
          >
            Post
          </button>
          <button
            type="button"
            id="closeNewPostModal"
            className="text-red-500 w-full"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default NewPostModal;