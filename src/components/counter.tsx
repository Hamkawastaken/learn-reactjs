import { useState } from "react";

const Counter = () => {
    
    function handleDecrement () {
        setCount(count - 1)
    }
    
    function handleIncrement () {
        setCount(count + 1)
    }

    function handleReset () {
        setCount(0)
    }

    const [count, setCount] = useState(0);

    return (
      <div>
        <div>
          <h1>Counter</h1>
        </div>
        <div style={{ display: "flex", gap: "28px" }}>
            <button onClick={handleDecrement}>Kurang</button>
            <p>Count Is : {count}</p>
            <button onClick={handleIncrement}>Tambah</button>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
            <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
}

export default Counter;