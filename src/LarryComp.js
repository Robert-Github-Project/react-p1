import React, { useState } from 'react';


function LarryComp(props) {
  const [count, setCount] = useState(1000);
  function myOnClick(e) {
 
    props.countFunc();
  }
  return (
    <div>
      <h1 onClick={props.countFunc}>Hello World from LarryComp {props.countx}</h1>
      {/* <hi onClick={myOnClick}>Hello World: count {count}</h1> */}
    </div>
  )
}

export default LarryComp;
