import { useState } from "react";

function Registration() {
    const [person, setPerson] = useState({firstName: "", lastName: "", email: "", phone: ""})
    
    const updateInput = (e) => {
        setPerson({...person, [e.target.name]: [e.target.value]})
    }

    const formSubmit = () => {
        (!person.firstName || !person.lastName || !person.email || !person.phone) ? 
        alert("All fields are required"):
        alert("Welcome " + person.firstName + " " + person.lastName)
    }
    return(
        <>
            <p>Registration form</p>
            <input name="firstName" value={person.firstName} placeholder="First Name" onChange={updateInput} required={true}></input>
            <input name="lastName" placeholder="Second Name" value={person.lastName} onChange={updateInput} required={true}></input>
            <input name="email" placeholder="Email" value={person.email} onChange={updateInput} required={true}></input>
            <input name="phone" type="number" placeholder="Phone" value={person.phone} onChange={updateInput} required={true}></input>
            <input type="submit" onClick={formSubmit}></input>
        </>
    );
}

export default Registration;

// registration 