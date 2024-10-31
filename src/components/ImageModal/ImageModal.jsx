import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ isModalOpen, closeModal, targetPhoto }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={css.Overlay}
      className={css.Content}
      bodyOpenClassName={css.Open}
    >
      <img src={targetPhoto.url} alt={targetPhoto.alt} />
    </Modal>
  );
}
