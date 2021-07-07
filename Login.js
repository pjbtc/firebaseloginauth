import React from 'react';
import {Form , Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";

export default function Login(){
    const emailRef= useRef()
    const passwordRef= useRef()
    
    const {login} = useAuth()
    const [error, setError] =useState('')
    const [loading, setLoading]= useState(false)
    const history= useHistory()

     async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !=
            passwordConfirmRef.current.value){
                return setError("Password dont match")
            }
            try{    
                setError('')
                setLoading(true)
                await login(emailRef.current.value, passwordRef.current.value)
                history.push("/")
            } catch {
                setError('Failed to login')
            
            
            setLoading(false)
            }
            
    }
    return(
        <div>
        <Card>
        <Card.body>
            <h2 className="text-center mb-4">Log In</h2>
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
            
            <Button  disabled ={loading} className="w-100" type="submit">
                Log In</Button>

            </Form>
            <div className="w-100 text-center mt-2">
                <Link to="/forgot-password">Forgot Password</Link>

            </div>
        </Card.body>
        </Card>
        <div className="w-100 text-center mt-2">
        Need an account?<Link to="/signup">SignUp</Link>
        </div>
        </div>

    )

}
