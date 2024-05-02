import React, { useState } from 'react';

function ClienteForm({ onAddCliente }) {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cnpjCpf, setCnpjCpf] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCliente({ nome, endereco, cnpj_cpf: cnpjCpf });
    setNome('');
    setEndereco('');
    setCnpjCpf('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />
      <input
        type="text"
        placeholder="CNPJ/CPF"
        value={cnpjCpf}
        onChange={(e) => setCnpjCpf(e.target.value)}
      />
      <button type="submit">Adicionar Cliente</button>
    </form>
  );
}

export default ClienteForm;
