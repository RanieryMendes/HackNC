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

const firebaseConfig = {
    apiKey: "AIzaSyBlLP43DpuVBUauqr3Bp4jWt_-k5k-d32U",
    authDomain: "potatolarge-546ca.firebaseapp.com",
    projectId: "potatolarge-546ca",
    storageBucket: "potatolarge-546ca.appspot.com",
    messagingSenderId: "108695117848",
    appId: "1:108695117848:web:30d691700a27f29cc3a36d",
    measurementId: "G-XFCC1PL167"
  };


const sign = (data) =>{

    const {email, password} = data

    let firebaseApp; 
 

    firebaseApp = firebase.initializeApp(firebaseConfig)

    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        console.log(error);
    });
    

}

const schema = yup.object().shape({
    email: yup.string().email().required(),
  password:yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required()
})


export const Login = () =>{
    const [show, setShow] = useState(false)

    let tag = show
    
if(show){
  return (
    <Navigate to="/" />
  )
}
else{

    return (
  <div>

    <Header/>

    <Formik
      validationSchema={schema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        sign(values)
        
        
        
        setShow(false)
        
        
        
      }}
      initialValues={{
       
        email:'',
        password:'',
    
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
        
            <Row className=" mb-5">
              <Form.Group as={Col} md="5" controlId="validationFormik06">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              {/* {my_data.email=values.email} */}
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>


            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-describedby="inputGroupPrepend"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                  {/* {my_data.password=values.password} */}
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>




           
            <Button className="mt-5" type="submit">Log In</Button>
          </Row>
          
         
          
      
         
        </Form>

      )}
    </Formik>
    

</div>)
}}