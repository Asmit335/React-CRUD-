import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import React, { useState } from 'react'

export const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const history = useNavigate("");

    const header = { "Access-Control-Allow-Origin": "*" }

    const handleSubmit = (e) => {

        e.preventDefault();
        // alert("clicked submit button.")
        axios.post(
            "https://64f0457b8a8b66ecf7795dea.mockapi.io/crudyt", {
                name: name,
                email: email,
                header,
            })

        .then(() => {
            history("/read");
        })


    };


    return < >
        <
        div className = 'd-flex justify-content-between m-2' >

        <
        h2 > Create < /h2> <
        Link to = { "/read" } >

        <
        button type = "button"
    class = "btn btn-primary" > Show Data < /button> <
        /Link> <
        /div>

    <
    form className = "mx-auto" >

        <
        div className = "mb-3" >
        <
        label
    for = "exampleInputPassword1"
    className = "form-label" > Name < /label> <
        input type = "text"
    className = "form-control"
    onChange = {
        (e) => setName(e.target.value) }
    /> <
    /div>

    <
    div className = "mb-3" >
        <
        label
    for = "exampleInputEmail1"
    className = "form-label" > Email address < /label> <
        input type = "email"
    className = "form-control"
    onChange = {
        (e) => setEmail(e.target.value) }
    /> <
    /div>


    <
    button type = "submit"
    className = "btn btn-primary"
    onClick = { handleSubmit } > Submit < /button>

    <
    /form> <
    />

}