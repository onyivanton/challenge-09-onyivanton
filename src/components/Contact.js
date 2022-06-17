// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import contactnya from "../data/contacts.json"

const nama = [],telp = [],email = []
contactnya.forEach((data) => {
    nama.push(<h3 className='namanya'>{data.name}</h3>)
    telp.push(<h3 className='telp'>{data.phone}</h3>)
    email.push(<h3 className='email'>{data.email}</h3>)
})

const Contact = ({index}) => {
    return (        
        <div className='container'>
            {nama[0]}
            {telp[0]}
            {nama[1]}
            {telp[1]}
            {nama[{index}]}
            {telp[{index}]}
            {index}
        </div> 
        
    )
}

export default Contact;