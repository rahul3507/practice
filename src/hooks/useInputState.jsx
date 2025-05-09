import { useState } from "react";

const useInputState = (initialValue=null) => {
    const [value, setValue] = useState(initialValue);
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    const reset = () => {
        setValue(initialValue);
    };
    
    return [value, handleChange, reset];
}
export default useInputState;