import React from 'react'

const App = () => {
  const handleClick = ()=>{
    alert("Button clicked")
  }

  const paraclick =(msg)=>{
    alert(msg)
  }
  const wrapper =()=>{
    paraclick("This is parrameter function")
  }
  return (
    <>
      <div>App</div>
      <div>Hello</div>
      <button onClick={handleClick}>Click</button>
      <button onClick={wrapper}>para clicked</button>
    </>
    
  )
}

export default App