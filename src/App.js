import React from 'react';
import ClienteForm from './Cliente';

function App() {
  const handleAddCliente = (cliente) => {
    // Aqui você pode enviar os dados do cliente para o backend
    console.log('Novo cliente:', cliente);
  };

  return (
    <div className="App">
      <h1>ERP - Sistema de Notas Fiscais</h1>
      <ClienteForm onAddCliente={handleAddCliente} />
    </div>
  );
}

export default App;
