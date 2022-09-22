import { useState, useEffect } from 'react';

const Edit = ({ obj, closeModal, confirmEdit }) => {
  const [editData, setEditData] = useState({
    title: '',
    time: '',
    date: '',
    name: '',
  });

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setEditData(obj);
  }, []);

  return (
    <div>
      <form
        className='form-notes'
        onSubmit={(e) => {
          e.preventDefault();
          confirmEdit(editData);
        }}
      >
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          className='notes-input'
          type='text'
          name='title'
          placeholder='Title'
          value={editData.title}
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          className='notes-input'
          type='text'
          name='time'
          placeholder='hr - min'
          value={editData.time}
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          className='notes-input'
          type='text'
          name='date'
          placeholder='dd/mm/yy'
          value={editData.date}
        />
        <textarea
          onChange={(e) => {
            handleChange(e);
          }}
          className='notes-input-data'
          type='text'
          name='name'
          placeholder='write your notes'
          value={editData.name}
        />
        <div className='form-btn-cnt'>
          <button type='submit' className='form-btn'>
            Submit
          </button>
          <button onClick={closeModal} type='button' className='form-btn'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
