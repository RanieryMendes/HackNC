import React from "react";
import {Header} from '../Header/index'
import { Fragment } from "react";
import { Row } from "react-bootstrap";

import Image from "react"


import image_1 from'../../assets/us.jpeg'




const About = () =>{

    return(
        <div>
            <Header/>
            <div styles={{maxWidth: "100px"}}>
                <img src={image_1}/> </div>
            <Fragment  >
       
            <div className="d-flex justify-content-between">
            
                <div  md="6"> 
                <h3 style={{marginTop:"200px" , marginLeft:"100px"}}>AJ Azipurua</h3>
                 <p style={{ marginLeft:"100px"}} >CS Major </p>
                </div>
                <div  md="6"> 
                
                        <h3 style={{marginTop:"200px" , marginLeft:"100px"}}>João Pinheiro</h3>
                    <p style={{ marginLeft:"100px"}}>Math Major</p>
                        
                </div>
                <div  md="6"> 
             
                <h3 style={{ marginTop:"200px" ,marginLeft:"50px", marginRight:"35px"}}>Raniery Mendes</h3>
                   <p style={{ marginLeft:"100px"}}>CS Grad</p>


                </div>
    
        

         

            </div>
            </Fragment>
        </div>
    )


}

export default About