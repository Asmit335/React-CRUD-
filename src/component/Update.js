import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")


    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://64f0457b8a8b66ecf7795dea.mockapi.io/crudyt/${id}`, {
                name: name,
                email: email,
            })
            .then(() => {
                navigate("/read");
            })
    }

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))


    }, [])



    return ( <
        >
        <
        div class = "grid gap-3" >


        <
        h2 > Update < /h2> <
        form className = "mx-auto" >

        <
        div className = "mb-3" >
        <
        label
        for = "exampleInputPassword1"
        className = "form-label" > Name < /label> <
        input type = "text"
        className = "form-control"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        /> < /
        div >

        <
        div className = "mb-3" >
        <
        label
        for = "exampleInputEmail1"
        className = "form-label" > Email address < /label> <
        input type = "email"
        className = "form-control"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        /> < /
        div >


        <
        button type = "submit"
        className = "btn btn-primary"
        onClick = { handleUpdate } > Update < /button>

        <
        Link to = { "/read" } >

        <
        button type = "submit"
        className = "btn btn-secondary m-2" > Back < /button> < /
        Link >

        <
        /form>

        <
        /div>

        <
        />
    )
}