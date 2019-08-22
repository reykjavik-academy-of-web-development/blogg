import React, { useState } from 'react';

const MyForm = () => {
  // const [data, setData] = useState([]);
  // const birta = () => {
  //   setData(data.push({ headline: '', efni: '' }));
  // };
  // const updateHeadline = event => {
  //   console.log(event);
  // };

  return (
    <div>
      <form method='post' action='http://localhost:5000'>
        <label htmlFor='headline'>Fyrirsögn</label>
        <input name='headline' id='headline' type='text' />
        <label htmlFor='content'>Efni</label>
        <textarea name='content' id='content' type='text' />
        <input value='birta' type='submit' />
      </form>
    </div>
  );
};

export default MyForm;
