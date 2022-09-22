import { useState, useEffect } from 'react';

import Modal from '../../modal/Modal';
import Notes from '../notes/Notes';
import Edit from '../edit/Edit';
import NoteTable from '../notetable/NoteTable';
import './body.css';

const Body = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [idForDelete, setIdForDelete] = useState('');
  const [dataForEdit, setDataForEdit] = useState('');

  const saveData = (data) => {
    if (data.title && data.date && data.time) {
      data.id = Math.floor(Math.random() * 10000);
      setNoteList([...noteList, data]);
      setIsOpen(false);
      return;
    }
    alert('All fields require');
  };

  const handleDelete = (id) => {
    setIdForDelete(id);
    setIsOpenDelete(true);
  };

  const confirmDelete = () => {
    if (noteList.length) {
      const filteredData = noteList.filter((item) => item.id !== idForDelete);
      setNoteList(filteredData);
      setIsOpenDelete(false);
    }
  };
  const handleEdit = (obj) => {
    setDataForEdit(obj);
    setIsOpenEdit(true);
  };

  const confirmEdit = (data) => {
    if (data.title && data.date && data.time) {
      const filteredData = noteList.filter((item) => item.id !== data.id);
      filteredData.push(data);
      setNoteList(filteredData);
      setIsOpenEdit(false);
    }
  };

  useEffect(() => {
    if (noteList.length) localStorage.setItem('data', JSON.stringify(noteList));
  }, [noteList]);

  useEffect(() => {
    if (!noteList.length && localStorage.getItem('data')) {
      const newData = JSON.parse(localStorage.getItem('data'));
      setNoteList(newData);
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const handelSearch = (e) => {
    const searched = e.target.value;
    const searchedText = searched.toString().toLowerCase();
    if (searched) {
      const filteredData = noteList.filter(
        (note) =>
          note.title.toLowerCase().includes(searchedText) ||
          note.time.toString().toLowerCase().includes(searchedText) ||
          note.date.toString().toLowerCase().includes(searchedText) ||
          note.name.toLowerCase().includes(searchedText)
      );
      setSearchList(filteredData);
      return;
    }
    setSearchList([]);
  };

  return (
    <div className='body-cnt'>
      {/* <div className='search-cnt'></div> */}
      <div className='btn-cnt'>
        <input
          type='search'
          className='search-bar'
          placeholder='search'
          onChange={(e) => {
            handelSearch(e);
          }}
        />

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
      <div>
        {!searchList.length
          ? noteList.map((item, index) => {
              return (
                <NoteTable
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  item={item}
                  index={index}
                />
              );
            })
          : searchList.map((item, index) => {
              return (
                <NoteTable
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  item={item}
                  index={index}
                />
              );
            })}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Notes handleAdd={saveData} />
      </Modal>
      <Modal isOpen={isOpenDelete} setIsOpen={setIsOpenDelete}>
        <div className='confirm-delete-modal'>
          <p>Are you sure?</p>
          <div>
            <button onClick={() => confirmDelete()}>Confirm</button>
            <button onClick={() => setIsOpenDelete(false)}>Cancel</button>
          </div>
        </div>
      </Modal>
      <Modal isOpen={isOpenEdit} setIsOpen={setDataForEdit}>
        <Edit
          confirmEdit={(data) => confirmEdit(data)}
          closeModal={() => {
            setDataForEdit(false);
          }}
          obj={dataForEdit}
        />
      </Modal>
    </div>
  );
};

export default Body;
