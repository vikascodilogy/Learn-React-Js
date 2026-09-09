// const App = () => {
//   const profiles=[
//     {name: "Vikas", age:12},
//     {name: "Akash", age:22},
//     {name: "Rekha", age:30},
//   ]
//   const updatedProfile= profiles.map((profile,index)=>{
//     console.log(profile,index)
//     return(
//     <li key={index}>
//       <span>Name: {profile.name}</span>
//       <small>Age: {profile.age}</small>
//     </li>)
//   })
//   console.log(updatedProfile)
//   return <div>
//     <h1>Rendering Json</h1>
//     <ol>{updatedProfile}</ol>
//   </div>
// }

// export default App






import { useState } from "react";
const App = () => {
  const [username,setUsername] = useState("Sarthak")
  const changeHandler =()=>{
    setUsername("Vikas")
    
  };
  console.log(username)
  return (
    <div>
      <h1>UserName</h1>
      <h2>{username}</h2>
      <button onClick={changeHandler}>Change name</button>
    </div>
  )
}

export default App