import React from 'react'

export const Delete = () => {
    function handleDelete(id) {
        axios.delete(
            `https://64f0457b8a8b66ecf7795dea.mockapi.io/crudyt/${id}`
        ).then(() => {
            getdata()
        })
    }
    return ( <
        >
        <
        button className = 'btn btn-danger'
        onClick = {
            () => {
                handleDelete(eachData.id)
            }
        } > Delete < /button> <
        />
    )
}