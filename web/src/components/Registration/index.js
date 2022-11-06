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

//const { Formik } = formik;
const firebaseConfig = {
    apiKey: "AIzaSyBlLP43DpuVBUauqr3Bp4jWt_-k5k-d32U",
    authDomain: "potatolarge-546ca.firebaseapp.com",
    projectId: "potatolarge-546ca",
    storageBucket: "potatolarge-546ca.appspot.com",
    messagingSenderId: "108695117848",
    appId: "1:108695117848:web:30d691700a27f29cc3a36d",
    measurementId: "G-XFCC1PL167"
  };





const sendDB = (data)=>{

    const {firstName, lastName, username, city, state, zip, email, password,  therapist, therapist_email} = data

    let firebaseApp; 
 

    firebaseApp = firebase.initializeApp(firebaseConfig)
    
    console.log(my_data.firstName)

    
    //const analytics = getAnalytics(app);
    var db = firebaseApp.firestore(firebaseApp)


    let colection = db.collection("data_register")

    colection.add({
       firstName : firstName, 
       lastName: lastName, 
       username : username,
       city: city, 
       state: state,
       zip: zip,
       email: email,
       password:password,
       therapist: therapist,
       therapist_email: therapist_email 
    }).then((snapshot)=>{
    
        console.log("New doc added: ", snapshot)
    })


    createNewUser(email, password, firebaseApp)

   

    alert("You have created your account on Are you okay bud?")

 

    
    



}
function createNewUser(user, password, app){
    
    //const auth = getAuth(app);
    let userName = user
    let userPassword = password
    

    app.auth().createUserWithEmailAndPassword(user, password).catch(function(error) {
        console.log(error);
    });

//     auth.createUserWithEmailAndPassword(app, userName, userPassword).then((user_credential)=>{
//     console.log(user_credential)
// }).catch(err=>{
//     console.log(err)
// })
}
const my_data={
    firstName:"",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password:"",
    therapist: "",
    therapist_email:"",
    
}

const schema = yup.object().shape({
  firstName: yup.string().min(2, 'Too Short!')
  .max(50, 'Too Long!').required(),
  lastName: yup.string().min(2, 'Too Short!')
  .max(50, 'Too Long!').required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  email: yup.string().email().required(),
  password:yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required(),
  therapist: yup.string().required(),
  therapist_email: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

export const Registration = () => {

    const [show, setShow] = useState(false)

    let tag = show
    
if(show){
  return (
    <Navigate to="/"/>
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
        sendDB(values)
        
        
        setShow(true)
        
        
        
      }}
      initialValues={{
        firstName: 'AJ',
        lastName: 'Pinheiro',
        username: '',
        city: '',
        state: '',
        zip: '',
        email:'',
        therapist:'',
        therapist_email:'',
        password:'',
        terms: false,
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

        
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
 {/* {my_data.firstName=values.firstName} */}
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />
                 {/* {my_data.lastName=values.lastName} */}
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                {/* {my_data.username=values.username} */}
                  
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

                {/* {my_data.city=values.city} */}
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
                {/* {my_data.state=values.state} */}
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

                {/* {my_data.zip=values.zip} */}
              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            
              </Form.Group>
            </Row>  
            <Row className="mb-3">
              <Form.Group as={Col} md="3" controlId="validationFormik06">
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




            <Form.Group as={Col} md="3" controlId="validationFormik07">
              <Form.Label>Therapist Information</Form.Label>
              <Form.Control
                type="text"
                placeholder="First and Last Name"
                name="therapist"
                value={values.therapist}
                onChange={handleChange}
                isInvalid={!!errors.therapist}
              />
               {/* {my_data.therapist=values.therapist} */}
              <Form.Control.Feedback type="invalid">
                {errors.therapist}
              </Form.Control.Feedback>


            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik08">
              <Form.Label>Therapist's Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Therapist's Email"
                name="therapist_email"
                value={values.therapist_email}
                onChange={handleChange}
                isInvalid={!!errors.therapist_email}
              />
               {/* {my_data.therapist_email=values.therapist_email} */}
              <Form.Control.Feedback type="invalid">
                {errors.therapist_email}
              </Form.Control.Feedback>


            </Form.Group>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          
          <Button type="submit">Submit form</Button>
         
        </Form>

      )}
    </Formik>
    


    </div>
  );
}

}


