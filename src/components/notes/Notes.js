import React from 'react';
import { useState } from 'react';
import './notes.css';

const Notes = () => {
  const [data, setData] = useState('');

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  return (
    <>
      <form className='form-notes' onSubmit={{}}>
        <input
          onChange={(e) => {
            handelChange(e);
          }}
          className='notes-input'
          type='text'
          name='title'
          placeholder='Title'
        />
        <input
          onChange={(e) => {
            handelChange(e);
          }}
          className='notes-input'
          type='text'
          name='time'
          placeholder='hr - min'
        />
        <input
          onChange={(e) => {
            handelChange(e);
          }}
          className='notes-input'
          type='text'
          name='due-date'
          placeholder='dd/mm/yy'
        />
        <textarea
          onChange={(e) => {
            handelChange(e);
          }}
          className='notes-input-data'
          type='text'
          name='name'
          placeholder='write your notes'
        />
        <div className='form-btn-cnt'>
          <button type='submit' className='form-btn'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Notes;
