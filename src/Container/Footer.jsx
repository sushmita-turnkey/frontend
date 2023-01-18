import React,{useContext,useState} from 'react'
import { FormContext } from '../Form/FormContext';
import { Row ,Col} from 'react-bootstrap'
import Container from '../Component/Container'
import axios from 'axios';

export default function Footer() {
    const { formState, handleChange } = useContext(FormContext);
    const [captcha, setCaptcha] = useState()
  const handleSubmit = event => {
    event.preventDefault();
    
    if(captcha!==undefined ){
        axios.post('https://glc1ga7mq4.execute-api.ap-south-1.amazonaws.com/dev/users/', formState)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    }
    else{
        alert("enter the captcha")
    }
    
  }
  return (
   <Container>
    <div className="footer-title">
        <p>I / We understand, the above informatio provided is correct to the best of my knowledge / belief, and understand the adversities / risk tolerance arising from mis - placement of information / data in any manner</p>
    </div>
    <Row className='pt-5 d-flex flex-column'>
        <Col sm={5}>
            <label className='para pb-2' htmlFor='captcha'>Enter Captcha</label>
        </Col>
        <Col sm={5}>
            <input className='capt-input' onChange={
                (e)=>setCaptcha(e.target.value)
            } id="captcha" name="captcha"type='text'/>
        </Col>
    </Row>
    <Row className='pt-5 '>
        <Col sm={5}>
        <form onSubmit={handleSubmit}>
            <button className='submit btn' type='submit'>Submit</button>
            </form>
        </Col>
    </Row>
   </Container>
  )
}



