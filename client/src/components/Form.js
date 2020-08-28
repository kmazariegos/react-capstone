import React, {useState} from "react"
import axios from "axios" 
import "./Form.css"

const Form = () => {
    const [userDetails, setUserDetails] = useState({
        userBreed: '', 
        userEmail: '', 
        message: ''
    })

    const formValues = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        })
    }

    const register = async (event) => {
        event.preventDefault();

        const body = JSON.stringify({
            userBreed: userDetails.userBreed,
            userEmail: userDetails.userEmail
        })

        const res = await axios.post("/api/register", body, {
            headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
        })
        .then(res => console.log(res, "hi"))
        .catch(err => console.log(err));


        setUserDetails({
            ...userDetails
        })
    }


    return (
        <div className="container"> 
            <h1 className="title">Register Breed</h1> 
            <form onSubmit={register}>
                <label>
                    Breed: 
                </label>
                <br/>
                <input required type="text" id="userBreed" name="userBreed" onChange={formValues}/>
                <br/>
                <label>
                    Email: 
                </label>
                <br/>
                <input required type="email" id="userEmail" name="userEmail" onChange={formValues}/>
                <br/>
                <button type="submit">Register Breed</button>
                {userDetails.message 
                    ? <h1 className="resultMessage">{userDetails.message}</h1>
                    : null
                }
            </form>
        </div>
    )
}

export default Form
