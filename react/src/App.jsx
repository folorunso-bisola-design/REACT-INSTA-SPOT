import './App.css';
import './index.css';
import './js/script.js';

function App() {
  return (
    <>
      {/* HEADER */}
      <header id="header">
        <img src="./assets/Spotlogo.png" alt="logo icon" />
        SPOTS
      </header>

      <main>
        {/* PROFILE SECTION */}
        <section id="profile" className="profile">
          <div className="left">
            <img id="profileImage" src="./assets/Avatar.png" alt="profile picture" />
            <div className="details">
              <h1 id="profileName">Bessie Coleman</h1>
              <p id="profileJob">Civil Aviator</p>
              <button id="edit" className="button button--secondary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="13.0676"
                    y="4.5451"
                    width="11.6506"
                    height="3.21396"
                    transform="rotate(135 13.0676 4.5451)"
                    fill="currentColor"
                  />
                  <path
                    d="M14.2036 1.13628C14.8312 1.76384 14.8312 2.78132 14.2036 3.40889L13.6354 3.97704L11.3628 1.70443L11.931 1.13628C12.5586 0.508714 13.576 0.508714 14.2036 1.13628Z"
                    fill="currentColor"
                  />
                  <path
                    d="M1.54021 13.1538L2.55674 10.5108L4.82935 12.7834L2.18637 13.8C1.782 13.9555 1.38468 13.5582 1.54021 13.1538Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* PRIMARY BUTTON */}
          <div className="right">
            <button className="button button--primary">
              <object
                type="image/svg+xml"
                data="/assets/plus-icon.svg"
                className="button__icon--primary"
              ></object>
              <span>New Post</span>
            </button>
          </div>

          {/* Edit Modal */}
          <dialog id="editModal" className="modal">
            <div className="modal-content">
              <h2>Edit Profile</h2>
              <span style={{ color: 'gray', cursor: 'pointer' }} id="showModal">
                Preview
              </span>
              <br />
              <form id="editProfileForm">
                <input
                  type="text"
                  id="editName"
                  placeholder="Name"
                  minLength="5"
                  maxLength="20"
                  autoFocus
                  required
                />
                <input
                  type="text"
                  id="editBio"
                  placeholder="Job"
                  minLength="5"
                  maxLength="20"
                  autoFocus
                  required
                />
                <input type="file" id="editImage" title="Photo" accept="image/*" />
                <button type="submit" style={{ cursor: 'pointer' }} className="Update-btn">
                  Update
                </button>
                <button
                  type="button"
                  id="closeEditModal"
                  style={{ color: 'red', cursor: 'pointer' }}
                  title="close"
                >
                  X
                </button>
              </form>
            </div>
          </dialog>

          {/* Preview Modal */}
          <dialog id="previewModal" className="modal">
            <div className="modal-content">
              <img
                id="previewImage"
                src=""
                alt="Preview"
                style={{ display: 'none', maxWidth: '150px', marginTop: '10px' }}
              />
              <h3 id="previewTitle">title</h3>
              <h3 id="previewJob">job</h3>
              <button
                id="closePreviewModal"
                style={{ color: 'red', cursor: 'pointer' }}
                title="close"
                autoFocus
              >
                X
              </button>
            </div>
          </dialog>
        </section>

        <hr className="divider-1" />

        {/* PHOTOS SECTION */}
        <section id="photos">
          <div className="images">
            {/* Example of a photo card */}
            {/* You can dynamically add photos here */}
          </div>
        </section>
      </main>

      {/* CLOSE CARD DETAILS MODAL */}
      <dialog id="close-modal"></dialog>

      {/* FOOTER SECTION */}
      <footer className="footer">
        <div className="footer-container">
          <p>2023 © Spots</p>
        </div>
      </footer>
    </>
  );
}

export default App;