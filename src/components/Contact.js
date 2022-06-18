// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css

import './Contact.css';

import React from 'react';
import contactnya from "../data/contacts.json"

const kontak=contactnya;

const Contact = ({index}) => {
    return (        
        
        <div style={{ border: "1px solid black"
                    ,margin: "10px 400px 10px 400px"
                    ,backgroundColor: "#E7BAFF"
                    ,borderRadius: "20px"
                    ,padding: "20px"
                    ,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 1.00)"
                    ,textAlign: "center"
                     }}> 
            
            <div className="row">
                <div className="column">
                    <img src={kontak[index].photo} alt="Forest" width="100" height="100"
                        style={{borderRadius: "20px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 1.00)"}} >

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