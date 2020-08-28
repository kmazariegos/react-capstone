import React, {useState, useEffect} from 'react'
import "./Dog.css"
import axios from 'axios'

const Dog = () => { 
    const [dogs, setDogs] = useState([])

    const getDogs = async() =>{
        const res = await axios.get('/api/dogImages')
        setDogs(res.data.dog.message[0])
    }

    useEffect(()=>{
        getDogs()
    }, [])


    return (
        <div className="container">
            <h1 className="title">Breed Images</h1>
            <img src={dogs}/>
        </div>
    )
}

export default Dog
