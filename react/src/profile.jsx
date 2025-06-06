import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("Web Developer");
  const [image, setImage] = useState(
    "https://via.placeholder.com/150"
  );
  const [showEditModal, setShowEditModal] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEditModal(false);
  };

  return (
    <div className="profile mb-8 text-center">
      <img
        id="profileImage"
        src={image}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 id="profileName" className="text-xl font-bold">
        {name}
      </h2>
      <p id="profileJob" className="text-gray-600 mb-4">
        {bio}
      </p>
      <button
        id="edit"
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => setShowEditModal(true)}
      >
        Edit Profile
      </button>

      {showEditModal && (
        <dialog open className="modal bg-white p-4 rounded shadow-lg">
          <form id="editProfileForm" onSubmit={handleSubmit}>
            <h3 className="text-lg font-bold mb-2">Edit Profile</h3>
            <input
              id="editName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full mb-2"
              placeholder="Name"
            />
            <input
              id="editBio"
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="border p-2 w-full mb-2"
              placeholder="Bio"
            />
            <input
              id="editImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Save
            </button>
            <button
              type="button"
              id="closeEditModal"
              className="text-red-500"
              onClick={() => setShowEditModal(false)}
            >
              Cancel
            </button>
          </form>
        </dialog>
      )}
    </div>
  );
}

export default Profile;