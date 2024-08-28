import React, { useState } from 'react';
import '../styles/Proposta.css'

const Proposta: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Definir mensagem padrão se o campo estiver vazio
    const finalMessage = formData.message.trim() === '' ? 'Estou interessado!!' : formData.message;

    // Simular envio da proposta
    await sendProposal({
      ...formData,
      message: finalMessage
    });
  };

  const sendProposal = async (data: typeof formData) => {
    // Simulação de envio para o vendedor (você deve substituir pela lógica real de envio)
    console.log('Enviando proposta para o vendedor:', data);
    
    // Aqui você pode implementar a lógica para enviar os dados do formulário para o servidor
    // Exemplo usando fetch:
    /*
    await fetch('/api/send-proposal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    */
  };

  return (
    <div className="proposta-container">
      <form onSubmit={handleSubmit} className="proposta-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default Proposta;
