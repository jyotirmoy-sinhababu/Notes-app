import React from 'react';
import { useState } from 'react';

const Notes = () => {
  const [data, setData] = useState('');

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <input
          onChange={(e) => {
            handelChange(e);
          }}
          className='notes-input'
          type='text'
          name='name'
        />
      </form>
    </>
  );
};

export default Notes;
