import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { initializeApp } from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { Navigate, Redirect, Link } from 'react-router-dom';


import Home from '../Home/index'

import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';



import { Formik } from 'formik';
import * as yup from 'yup';

import {Header} from '../Header/index'
import { useState } from 'react';

import Card from 'react-bootstrap/Card'
import { Container } from '@mui/material';



const firebaseConfig = {
    apiKey: "AIzaSyBlLP43DpuVBUauqr3Bp4jWt_-k5k-d32U",
    authDomain: "potatolarge-546ca.firebaseapp.com",
    projectId: "potatolarge-546ca",
    storageBucket: "potatolarge-546ca.appspot.com",
    messagingSenderId: "108695117848",
    appId: "1:108695117848:web:30d691700a27f29cc3a36d",
    measurementId: "G-XFCC1PL167"
  };


const schema = yup.object().shape({
    log_text: yup.string().min(500).required()})


const write_data = (text) =>{

   
}


const save_entry = (data, identifier) =>{

   const {log_text} = data


   let firebaseApp; 
 

   firebaseApp = firebase.initializeApp(firebaseConfig)
   

   var db = firebaseApp.firestore(firebaseApp)


   let colection = db.collection("data_register")

   let ref = colection.doc(identifier)

   ref.update({
    log_text: firebase.firestore.FieldValue.arrayUnion(data)
});


   

}

export const User = () =>{



    const [show, setShow] = useState(false)


    if(show){

        return(<Navigate to="/" />)
    }

    else{

    return(

        <div>

        <Header/>

        <Card>
        <Card.Body>
             <Card.Title>Daily Log</Card.Title>    
            <Card.Text className="alert"> Hi Bud! How are you?!</Card.Text> 
        </Card.Body>


        </Card>

        <Container fluid >

        <Formik
      validationSchema={schema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        
        let identifier = "gk9g5904iN2TfAdawUno"
        save_entry(values, identifier)
        
       
        
        
        alert("You are in")
        
        setShow(true)
        
        
        
      }}
      initialValues={{
       
        log_text: " "
    
      }}
    >


      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (

        
        <Form noValidate onSubmit={handleSubmit} className="mt-5" style={{margin:"50px"}}>
        
        
              <Form.Group as={Col} md="5" controlId="validationFormik06">
              <Form.Label>Thoughts about Today</Form.Label>
              <Form.Control
                type="text"
                placeholder="How was your day? How are you feeling?"
                name="log_text"
                value={values.log_text}
                onChange={handleChange}
                isInvalid={!!errors.log_text}
              />
              {/* {my_data.email=values.email} */}
              <Form.Control.Feedback type="invalid">
                {errors.log_text}
              </Form.Control.Feedback>


            </Form.Group>

            <Button className="mt-5" type="submit">Save your Entry</Button>
            </Form>)}

            </Formik>
            </Container>
            







        </div>
    )

      }
}