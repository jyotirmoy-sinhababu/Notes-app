import ReactDOM from 'react-dom';
import './modal.css';
const Modal = ({ isOpen, children, setIsOpen }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='modal-design'>
      <div className='cancel-btn-cnt'>
        <button
          className='cancel-btn'
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Cancel
        </button>
      </div>

      {children}
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
