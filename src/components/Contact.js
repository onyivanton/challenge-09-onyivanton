// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css

import './Contact.css';

import React from 'react';
import contactnya from "../data/contacts.json"

const kontak=contactnya;

const Contact = ({index}) => {
    return (        
        
        <div className="kotakku"> 
            <div className="row">
                <div className="column">
                    <img className="gambar" src={kontak[index].photo} 
                    alt="Forest" width="120" height="120">

                    </img>

                </div>
                <div classname="column">
                    <h4> {kontak[index].name} </h4> 
                    <h4> {kontak[index].phone}</h4> 
                    <h4> {kontak[index].email} </h4>
                </div>
            </div>

        </div>
            
    )
}



export default Contact;