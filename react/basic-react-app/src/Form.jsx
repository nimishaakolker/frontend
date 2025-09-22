import { useState } from "react"

export default function Form () {
    // let [name, setName] = useState("")
    let [formData, setFormDate] = useState({
        name : "",
        username : "",
        password : ""
    })
    // let handleName = (event) => {
    //     setName(event.target.value)
    // }

    let handleInputChange = (event) => {
        setFormDate((currData) => {       
            return{ ...currData, [event.target.name] : event.target.value}
        } )
    }

    let handleSubmit = (event) => {
        event.preventDefault();
    console.log(formData)
        setFormDate({
        name : "",
        username : "",
        password : ""
        })
    }

    return(
        <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name :</label>
            <input type="text"
             id="name" 
            value={formData.name}
             onChange={handleInputChange}
             name="name"/>

             <hr />

             <label htmlFor="username">Username : </label>
             <input type="text" 
             id="username"
             value={formData.username}
             onChange={handleInputChange}
             name="username"/>
              <hr />

            <label htmlFor="password">Password : </label>
            <input type="password" 
             id="password"
             value={formData.password}
             onChange={handleInputChange}
             name="password"/>

            <button>Submit</button>
        </form>
        </div>
    )
}