import { useState } from "react"

function Register(){
    const [formData,setFormData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        con_password:""
    })

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (formData.password!=formData.con_password){
            alert("Password dose not match !")
            return;
        }
        alert("Registration Successfull")
        console.log(formData)
    }
    return(
        <section>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" id="first_name" value={formData.first_name} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" id="last_name" value={formData.last_name} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" value={formData.email} id="email" onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={formData.password} id="password" onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="con_password">Confirm Password</label>
                    <input type="password" name="con_password" value={formData.con_password} id="con_password" onChange={handleChange}/>
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
            
        </section>
    )
}

export default Register