import { useState } from 'react';

export const GreetingComponent = () => {
    const [name, setName] = useState ('Hello Pax');
    
    const handleClick = () => {
      if (name == "Hello Pax"){
       setName ("Goodbye Pax");
      } else {
        setName ("Hello Pax")
        
      }
    
    }

    return (
        <div>
            <h1>Welcome</h1>
            <p>{name}</p>
            <button onClick={handleClick}>Click</button>

        </div>
    )
}