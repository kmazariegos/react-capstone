import React, {useState, useEffect} from 'react'
import "./Home.css"
import axios from 'axios'

const Home = () => { 
    const [users, setUsers] = useState([])

    console.log(users, "here and now")


    const getUsers = async() =>{
        const res = await axios.get('/api/users')
        console.log(res.data.users, "these are my home users!!")
        setUsers(res.data.users)
    }



    useEffect(()=>{
        getUsers()
    }, [])


    const allUsers = users.length > 0 && users.map((user, index) => {
        return <li key={index}>Breed: {user.breed} Email: {user.email}</li>
    })


    return (
        <div className="container">
            <h1 className="title">All Breeds</h1>
            <ul className="users">
                {allUsers}
            </ul>
        </div>
    )
}

export default Home
