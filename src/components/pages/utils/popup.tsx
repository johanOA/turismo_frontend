import Modal from "react-modal";
import "./popup.css"

export default function Popup({ isOpen, onClose, title, message }) {
  return (
      <div className='container-buton-popup'>
            <Modal
            isOpen={isOpen}
            contentLabel="Popup"
            className="popup-modal"
            >
            <h2 className="title-popup">{title}</h2>
            <p className="text-popup">{message}</p>
            <button className="btn-popup" onClick={onClose}>Cerrar</button>
            </Modal>
      </div>
  );
}
