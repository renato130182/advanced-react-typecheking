import React, {useRef} from "react";

import PetShop from "./PetShop";

function App() {
  const inputRef = useRef()

  const handleClick = () => {
    console.log('Iniciar o banho...')    
    inputRef.current.focus()
  }
  

  return (
    <div>
      <PetShop dogs={2} customerName='Renato Soares' 
          onclick={handleClick} status='wait'> 
      </PetShop>
      <div>
          <input ref={inputRef} />
      </div>
    </div>
  );
}

export default App
