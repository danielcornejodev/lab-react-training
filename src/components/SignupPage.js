import React from 'react';
import { useState } from 'react';

export default function SignupPage() {
    const [userDetails, setUserDetails] = useState(() => []);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        nationality: ""
    });
    
    const handleChange = (event) => {
        event.preventDefault();

        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }

    // const handleonClick = (event) => {
    //     event.preventDefault();

    //     // console.log({ event });
    //     // console.log({ target: event.target })

    //     setFormData({
    //         ...formData, 
    //         [event.target.name]: event.target.value
    //     })
    // }


    const handleSubmit = (e) => {
        e.preventDefault();

        setUserDetails([...userDetails, formData]);

        setFormData({
            email: "",
            password: "",
            nationality: ""
        })

    }

    const displayMessage = () => {
        return userDetails.length ? userDetails.map((user, i) => {
          return (
            <div key={i}>  
                <p>{user.nationality === 'en' ? 'Hello' : ''}</p>
                <p>{user.nationality === 'de' ? 'Hallo' : ''}</p>
                <p>{user.nationality === 'en' ? 'Bonjour' : ''}</p>
                <p>Your email address is: {user.email}</p>
            </div>
          ) 
        }): (<p>Please sign up</p>);
      }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Email</label><input id='email' type='email' name='email' value={formData.email} onChange={(e) => handleChange(e)} />
                <label>Password</label><input type='password' name='password' value={formData.password} onChange={(e) => handleChange(e)} />
                <label for="nationality">Nationality</label>
                <select name="nationality" value={formData.nationality} onChange={(e) => handleChange(e)}>
                    <option value="">--Choose a language--</option>
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                    <option value="fr">FR</option>
                </select>
                <button>Sign Up</button>
            </form>
            {displayMessage()}
        </>
    )
}
