import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ isModalOpen, closeModal, targetPhoto }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img src={targetPhoto.url} alt={targetPhoto.alt} />
    </Modal>
  );
}
