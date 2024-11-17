import "./Modal.css";

export function Modal({ children, show, onClose }) {
  if (show) {
    return (
      <>
        <div className="modal-background" onclick="closeModal(event)">
          <div className="ease-out duration-300 fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <section className=" bg-white rounded-lg shadow-lg max-w-lg w- p-16 space-y-4">
              {children}
              <button
                className="close justify-start top-0 right-0"
                type="button"
                onClick={onClose}
              >
                &#x2715;
              </button>
            </section>
          </div>
        </div>
      </>
    );
  }
}
