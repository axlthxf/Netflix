import React,{useState} from 'react'

function StateExamples() {
    const [count, setcount] = useState(0);
    
  return (
    <>
      <p className='text-white'>{count}</p>
  <button className='text-white' onClick={()=>{setcount(count+1)}} >Click Me</button>
    
    </>
  
  )
}

export default StateExamples
