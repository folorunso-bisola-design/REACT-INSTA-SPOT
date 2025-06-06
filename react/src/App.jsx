import React, { useState } from "react";
import Profile from "./components/Profile";
import ImageGallery from "./components/ImageGallery";
import ImageModal from "./components/ImageModal";
import NewPostModal from "./components/NewPostModal";
import { IMAGES_DATA } from "./data/image-card-data";
import "./App.css";

function App() {
  const [images, setImages] = useState(IMAGES_DATA);
  const [modalImage, setModalImage] = useState(null);
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const openImageModal = (image) => {
    setModalImage(image);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  const addNewPost = (newPost) => {
    setImages([newPost, ...images]);
  };

  return (
    <div className="app p-4 max-w-4xl mx-auto">
      <Profile />
      <ImageGallery images={images} onImageClick={openImageModal} />
      <button
        className="button--primary bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        onClick={() => setShowNewPostModal(true)}
      >
        New Post
      </button>
      {modalImage && (
        <ImageModal image={modalImage} onClose={closeImageModal} />
      )}
      {showNewPostModal && (
        <NewPostModal
          onClose={() => setShowNewPostModal(false)}
          onAddPost={addNewPost}
        />
      )}
    </div>
  );
}

export default App;