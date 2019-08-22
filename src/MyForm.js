import React, { useState } from 'react';

const MyForm = () => {
  const [data, setData] = useState({ headline: '', content: '' });
  const publish = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/' , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data) 

    })
     .then((result) => {
       console.log(result)
     })
 } 
    

  const updateHeadline = event => {
    setData({...data, headline: event.target.value})
  };

  const updateContent = event => {
    setData({...data, content: event.target.value})
  };

  return (
    <div>
      <form method='post' onSubmit={publish}>
        <label htmlFor='headline'>Fyrirsögn</label>
        <input name='headline' id='headline' type='text' onKeyUp={updateHeadline}/>
        <label htmlFor='content'>Efni</label>
        <textarea name='content' id='content' type='text' onKeyUp={updateContent}/>
        <input value='publish' type='submit' />
      </form>
    </div>
  );
};

export default MyForm;
