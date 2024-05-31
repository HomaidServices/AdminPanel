import React, { useState } from 'react';

function Date() {
  const [date, setDate] = useState('');

  const handleAddButtonClick = () => {
    const today = new Date();
    const formattedDate = today.toDateString(); // Format the date as desired
    setDate(formattedDate);
    console.log(today)
  };

  return (
   
    <div className='dashboard'>
     
   
      <button onClick={handleAddButtonClick}>Add</button>



      <h1 className='text-danger'>{date}</h1>
    </div>
  );
}

export default Date;
