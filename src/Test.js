import React from 'react';
import useState from 'react';

const Test = () => {
  //   const [data, setData] = useState([]);
  const birta = () => {
    // setData(data.push({headline: "", efni: ""}))
  };
  const updateHeadline = event => {
    console.log(event);
  };

  return (
    <div>
      <form action='post'>
        <label for='headline'>Fyrirsögn</label>
        <input id='headline' type='text' onKeyPress={updateHeadline} />
        <label for='content'>Efni</label>
        <textarea id='content' type='text' />
        <button onClick={birta} type='submit'>
          Birta
        </button>
      </form>
    </div>
  );
};

export default Test;
