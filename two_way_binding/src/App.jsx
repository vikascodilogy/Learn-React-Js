import React, { useState } from 'react'
import Create from './Components/Create';
import Read from './Components/Read';


const App = () => {
  const [users, setusers]=useState([
    {name:"vikas",age:12},
    {name:"Ankur",age:32},
    {name:"Ankit",age:22}
  ]);
  return (
    <div>
      <Create />
      <Read users={users} setusers={setusers}/>
    </div>
  )
}

export default App