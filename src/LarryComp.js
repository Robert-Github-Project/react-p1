import React from 'react';


function LarryComp(props) {
  const [count, setCount] = useState(1000);
  function myOnClickCount(e) {
    count++;
    console.log("we just clicked count", count);
props.countFunc();
  }
  return (
    <div>
      <h1 onClick={props.countFunc}>Hello World from LarryComp {count}</h1>

    </div>
  );
}

export default App;
