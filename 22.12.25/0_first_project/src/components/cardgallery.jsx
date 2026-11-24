import React from 'react'
import {useState, useEffect} from 'react'



// useEffect -> (API), -> Behaviour(3) and syntax
//1. useEffect(callback function(//kaam), dependency -> [](array)) -> 2 arguments ..
//addEventListner("depend", ()=>(})

  //2. dependency -> nun -> array[] -> empty -> only once ane then one never execute...
  //3. second argument is optional -> if it is not present useEffect then it will consider the entire component as it's own dependency..

export default function Cardholder(Element) {
  var[name, setName] = useState("Dharmi");
  var [count, setCount] = useState(0);
  var obj;
  
  // useEffect(()=>{
  //  fetch("https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=1c7dadc8edac7c14fcef84f7e0237f8e")
  //  .then((res)=>res.json())
  //  .then((data)=>{
  //   obj=data;
  //   console.log(`The data as injected/passed in obj variable: ${obj.title}`);
    
  //  })
  // },[]);

  function handleClick(){
    setName("Dharmi Patel")
    setCount(++count);
  }

  


useEffect(()=>{
  console.log(`count is incremented: ${count}`);
   fetch("https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=1c7dadc8edac7c14fcef84f7e0237f8e")

  .then((res)=>res.json())
   .then((data)=>{
   console.log(data);
  
   });
},[count]);

  return (
    <div className="Content">
        <div className="card">
            <div className='imagecontainer'><img src= {Element.image} alt="" className="image"/></div>
            <p className="title">{Element.title}</p>
            <p>{name}</p>
            <p>count1:{Element.count}</p>
             <p className="desc">{Element.desc}</p>
              <p>{Element.num}</p>
              <button className='btn' onClick ={handleClick}>Read More</button>
        </div>
          </div>
  )
}