import { useState } from "react"
const Create = (props) => {
  console.log(props)

  const [fullname,setfullname]=useState("")
  const [age,setAge]=useState(18)

  const submitHandler=(e)=>{
    e.preventDefault();
    const newuser = {fullname,age}
    console.log(newuser)
  }
  return (
    <div>
      <h1>Register User</h1>
      <form action=""onSubmit={submitHandler}>
        <input 
            onChange={(e)=>setfullname(e.target.value)}
            type="text" 
            placeholder='Full Name'  
            value={fullname} 
        />
        <input 
          type="number" 
          laceholder='Age' 
          onChange={(e)=>setAge(e.target.value)}
          value={age}  
        />

        <input type="submit" />
      </form>
    </div>
  )
}

export default Create