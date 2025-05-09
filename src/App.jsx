
import { useRef } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
 
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(
    () => {
      nameRef.current.focus();
      nameRef.current.value = "Rahul";
      
    }, []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);

  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name='name' />
        <br />
        <input ref={emailRef} type="email" name='email' />
        <br />
        <input ref={phoneRef} type="text" name='phone' />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
        
    </>
  )
}

export default App
