import React from 'react';
import { useState } from 'react';
import Modal from '../../modal/Modal';
import Notes from '../notes/Notes';
import './body.css';

const Body = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className='body-cnt'>
      {/* <div className='search-cnt'></div> */}
      <div className='btn-cnt'>
        <input type='search' className='search-bar' placeholder='search' />

        <button className='add-btn' onClick={openModal}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className=' bi-plus-lg'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
            />
          </svg>
        </button>
      </div>
      <div className='notes-cnt'></div>
      <div className='modal-cnt'>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <Notes />
        </Modal>
      </div>
    </div>
  );
};

export default Body;
