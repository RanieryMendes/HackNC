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

// const firebaseConfig = {
//     apiKey: "AIzaSyBlLP43DpuVBUauqr3Bp4jWt_-k5k-d32U",
//     authDomain: "potatolarge-546ca.firebaseapp.com",
//     projectId: "potatolarge-546ca",
//     storageBucket: "potatolarge-546ca.appspot.com",
//     messagingSenderId: "108695117848",
//     appId: "1:108695117848:web:30d691700a27f29cc3a36d",
//     measurementId: "G-XFCC1PL167"
//   };


  
// require('dotenv').config();  
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId:  process.env.MESSAGEID,
//   appId: process.env.APPID
// };

import { firebaseConfig } from '../../firebaseConfig';

const sign = (data) =>{

    const {email, password} = data

    let firebaseApp; 
    

    firebaseApp = firebase.initializeApp(firebaseConfig)


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          console.log(uid)
          // ...
        } else {
            console.log("none")
          // User is signed out
          // ...
        }
      });

    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        console.log(error);
    });


    
//     firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
//     .then(() => {

//         console.log("Aparentement logado")
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     return firebaseApp.auth().signInWithEmailAndPassword(email, password);
//   })
//   .catch((error) => {
//     console.log(error)
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });

let info

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;

    info = user
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });


//   var db = firebaseApp.firestore(firebaseApp)


//   let colection = db.collection("data_register")

//   dbRef = colection.doc(info)

//   dbRef.get().then((doc)=>{
//     let dados = doc.data()

//     var user_name = dados.firstName

    


   

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
    <Navigate to="/user" />
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
        setShow(true)
        
        
        alert("You are gonna be okay bud!")
        
        
        
        
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