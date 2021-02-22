import React from "react";

import PetShop from "./PetShop";

function App() {

  const handleClick = () => {
    console.log('Iniciar o banho...')
  }

  return (
    <div>
      <PetShop dogs={2} customerName='Renato Soares' onclick={handleClick}> 
      </PetShop>
    </div>
  );
}

export default App;
