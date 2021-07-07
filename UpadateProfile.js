import React from 'react';
import {Form , Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";

export default function UpdateProfile(){
    const emailRef= useRef()
    const passwordRef= useRef()
    
    const {currentUser, updatePassword, updateEmail} = useAuth()
    const [error, setError] =useState('')
    const [loading, setLoading]= useState(false)
    const [message, setMessage]= useState("")
    const history= useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !=
            passwordConfirmRef.current.value){
                return setError("Password dont match")
            }
            try{
                setMessage('')
                setError('')
                setLoading(true)
                await resetPassword(emailRef.current.value)
                setMessage('Check your inbox for further instruction')
                
            }catch{
                setError('Failed to reset password')
            }
            setLoading(false)
    }
    return(
        <div>
        <Card>
        <Card.body>
            <h2 className="text-center mb-4">Password Reset</h2>
            {currentUser.email}
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}> 
            <Form.Group id="email">
            <Form.label>email</Form.label>
            <Form.Control type="email" ref={emailRef}
            required/>
            </Form.Group>
           
            
            <Button  disabled ={loading} className="w-100" type="submit">
                Reset Password</Button>

            </Form>
            <div className="w-100 text-center mt-2">
            <Link to="/login">Login</Link>
        </div>  
             
        </Card.body>
        </Card>
        <div className="w-100 text-center mt-2">
        Need an account?<Link to="/signup">SignUp</Link>
        </div>
        </div>

    )

}