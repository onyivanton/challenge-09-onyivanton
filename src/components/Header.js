// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

import LabelHeader from './LabelHeader';
import PemisahComp from './PemisahComp';


const styleObj = {
    fontSize: 30,
    color: "#09d318",
    textAlign: "center",
    margin:"10px",
  }

const Header = () => {
    return (
        <div>
            <div style={styleObj}>         
                <LabelHeader text="Call a Friend"/>
            </div>
            <div  style={{fontSize: 20,textAlign: "center"}}>         
                <LabelHeader text="youre friendly contact App"/>
            </div>
            <div style={{fontSize: 20,textAlign: "center"}}>         
                <PemisahComp dotss="--------------------------------------"/>
            </div>
        </div>
    )
}

export default Header;