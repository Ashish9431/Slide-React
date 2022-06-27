import Slide from "./Components/Slide";
import "./styles.css";
import { useState } from "react"

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];


export default function App() {  
  // const [num , setnum] = useState(data); 
  const [count , setCount] = useState(0)   

  const handle1 =()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  const handle2 =()=>{
    if(count<2){
      console.log(count); 
      setCount(count+1);  
    }  
    else{
      return count; 
    }
  }

  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide data={data[count]} />       
      <button data-testid="prev" onClick={handle1} >Prev</button>
      <button data-testid="next" onClick={handle2} >Next</button>
    </div>
  );
}