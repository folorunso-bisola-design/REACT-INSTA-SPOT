import React from "react";

function ImageModal({ image, onClose }) {
  return (
    <dialog open className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-container bg-white p-4 rounded shadow-lg relative">
        <img src={image.src} alt={image.title} className="modal-img w-full h-auto mb-4" />
        <p className="favourite mb-2 text-center">{image.title}</p>
        <button
          className="close-modal-btn bg-red-500 text-white px-4 py-2 rounded w-full"
          onClick={onClose}
        >
          CLOSE
        </button>
      </div>
    </dialog>
  );
}

export default ImageModal;