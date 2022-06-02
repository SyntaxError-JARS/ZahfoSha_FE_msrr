import React from "react";
import axios from "axios";
import { useState, useRef } from "react";

export default function Counter() {
    //   let count = 0;
    //   function increase() {
    //     count++;
    //     console.log(count);
    //   }
  
    const [count, setCount] = useState(0);
  
    function increase() {
      const newValue = count + 1;
      setCount(newValue);
    }
  
    const [minus, setMinus] = useState(0);
  
    function decrease() {
      const deValue = minus - 1;
      setMinus(deValue);
    }
  
    return (
      <>
        <h3>The counter is at {count}</h3>
        <button onClick={increase}>Add to the Counter</button>
        <h3>The counter is at {minus}</h3>
        <button onClick={decrease}>Minus to the Counter</button>
      </>
    );
  }