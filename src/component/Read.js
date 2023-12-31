import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export const Read = () => {

    const [data, setData] = useState([])


    function getdata() {

        axios
            .get("https://64f0457b8a8b66ecf7795dea.mockapi.io/crudyt")
            .then((res) => {
                // alert(res.data)
                setData(res.data);
            });
    }

    useEffect(() => {
        getdata();

    }, [])


    function handleDelete(id) {
        axios.delete(
            `https://64f0457b8a8b66ecf7795dea.mockapi.io/crudyt/${id}`
        ).then(() => {
            getdata()
        })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    return ( <
        >

        <
        div class = "form-check form-switch" >
        <
        input className = "form-check-input m-2"
        type = "checkbox"
        role = "switch"
        id = "flexSwitchCheckDefault" / >
        <
        /div>

        <
        div className = 'd-flex justify-content-between m-2' >
        <
        h2 > Read Operation < /h2>


        <
        Link to = { "/" } >

        <
        button type = "button"
        class = "btn btn-secondary" > Create < /button> <
        /Link> <
        /div>

        <
        table class = "table" >
        <
        thead >
        <
        tr >
        <
        th scope = "col" > SN < /th> <
        th scope = "col" > Name < /th> <
        th scope = "col" > Email < /th> { /* <th scope="col"></th> */ } <
        /tr> <
        /thead>


        {
            data.map((eachData) => {
                return ( <
                    >
                    <
                    tbody >
                    <
                    tr >
                    <
                    th scope = "row" > { eachData.id } < /th> <
                    td > { eachData.name } < /td> <
                    td > { eachData.email } < /td>

                    <
                    td >
                    <
                    Link to = { "/update" } >
                    <
                    button className = 'btn btn-success'
                    onClick = {
                        () => setToLocalStorage(eachData.id, eachData.name, eachData.email) } > Edit < /button> <
                    /Link> <
                    /td>

                    <
                    td >
                    <
                    button className = 'btn btn-danger'
                    onClick = {
                        () => {
                            handleDelete(eachData.id)
                        }
                    } > Delete < /button> <
                    /td> <
                    /tr> <
                    /tbody> <
                    />
                )
            })
        }


        <
        /table> <
        />
    )
}