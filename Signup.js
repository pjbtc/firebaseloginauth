

import React,{useState, useRef} from 'react';
import {Form , Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import {Link , useHistory} from "react-router-dom";

export default function Signup(){
    const emailRef= useRef()
    const passwordRef= useRef()
    const passwordConfirmRef= useRef()
    const {signup} = useAuth()
    const [error, setError] =useState('')
    const [loading, setLoading]= useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !=
            passwordConfirmRef.current.value){
                return setError("Password dont match")
            }
            try{
                setError('')
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value)
                //history.push("/")
            } catch  { 
                setError('Failed to create account')
            }
            setLoading(false)
    }
    return(
        <div>
        <Card>
        <Card.body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {currentUser.email}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}> 
            <Form.Group id="email">
            <Form.label>email</Form.label>
            <Form.Control type="email" ref={emailRef}
            required/>
            </Form.Group>
            <Form.Group id="password">
            <Form.label>password</Form.label>
            <Form.Control type="password" ref={passwordRef}
            required/>
            </Form.Group>
            <Form.Group id="password-confirm">
            <Form.label>Password Confirmation</Form.label>
            <Form.Control type="email" ref={passwordConfirmRef}
            required/>
            </Form.Group>
            <Button  disabled ={loading} className="w-100" type="submit">
                Sign Up</Button>

            </Form>
        </Card.body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account ?<Link to="/login">Log In</Link>    
        </div>
        </div>

    )

}