
import { useRef } from 'react';
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { HookForm } from './components/hookForm';

function App() {
 
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const [error, setError] = useState('');
  useEffect(
    () => {
      nameRef.current.focus();   
    }, []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneRef.current.value.length < 11) {
      setError('Phone number must be  11 digits');
    }
    else if (phoneRef.current.value.length === 11) {
      setError('');
      alert('Form submitted successfully');
    }

  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input ref={nameRef} defaultValue={'Rahul'} type="text" name='name' />
        <br />
        <input ref={emailRef} type="email" name='email' required/>
        <br />
        <input ref={phoneRef} type="text" name='phone' required/>
        <br />
        <input type="submit" value="Submit"  />
        <br />
        {error && <p style={{color: 'red'}}>{error}</p>}
      </form>

      <HookForm/>
      
        
    </>
  )
}

export default App
