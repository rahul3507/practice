import React from 'react'
import useInputState from '../hooks/useInputState';

export const HookForm = () => {
    const [name, handleNameChange] = useInputState('rahul');
    const handleSubmit = (e) => {
        console.log(name);
        e.preventDefault();
    }
  return (

    
    <div>
        <form  onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} type="text" name='name' />
        <br />
        <input  type="email" name='email' required/>
        <br />
        <input  type="text" name='phone' required/>
        <br />
        <input type="submit" value="Submit"  />
        <br />
     
      </form>
    </div>
  )
}
