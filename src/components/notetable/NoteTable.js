import './noteTable.css';

const NoteTable = ({ item, index, handleDelete, handleEdit }) => {
  return (
    <>
      <div>
        <div className='student-data-box'>
          <div className='student-data'>
            <h3>{`${index + 1}. ${item.title}`}</h3>
            <p>{item.time}</p>
            <p>{item.date}</p>
            <p>{item.name}</p>
          </div>
          <div className='student-data-btn'>
            <button
              onClick={() => {
                handleEdit(item);
              }}
              className='edit-btn'
            >
              edit
            </button>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
              className='delete-btn'
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteTable;
