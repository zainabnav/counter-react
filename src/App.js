
import React from "react";
import {useState} from 'react';

export default function Counter() {
  const[score, scoreSet] = useState(0);

  function increment(){
   scoreSet(score+1);
  }
  function increment5(){
    scoreSet(score+5);
    }

  function decrement(){
    if (score > 0){
    scoreSet(score-1);
    }
   }
  function decrement5(){
    if (score > 4){
    scoreSet(score-5);
    }
  }
function reset(){
  scoreSet(0);
}
return (
    <div className="flex bg-pink-900 h-[100vh] text-white items-center justify-center flex-wrap">
      <div>
    <div className="bg-pink-800 w-[100%] h-[20px]">
    <h1 className="bg-pink-600 p-1 pl-12 text-2xl" >COUNTER</h1>
    <div className="flex w-[100%] ">
    <button className="p-2 m-1 bg-pink-700 items-center justify-center" onClick={increment5}>+5</button>
   <button className="p-2 m-1 bg-pink-700 items-center justify-center" onClick={increment}>+1</button>
<p className="p-2 bg-pink-600 m-1">score: {score}</p> 
 <button className="p-2 bg-pink-700 m-1" onClick={decrement}>-1</button>
   <button className="p-2 m-1 bg-pink-700 items-center justify-center" onClick={decrement5} disabled={scoreSet<5}>-5</button>
   <button className="p-2 m-1 bg-pink-700 items-center justify-center" onClick={reset}>Reset</button>
</div>
   </div>
   </div>
   </div>
);
}