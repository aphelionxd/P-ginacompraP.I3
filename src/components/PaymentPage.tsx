import React, { useState } from 'react';
import '../styles/PaymentPage.css';

const PaymentPage = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState<'pix' | 'boleto' | 'card' | null>(null);

  const handlePaymentSelection = (method: 'pix' | 'boleto' | 'card') => {
    setActivePaymentMethod(method);
  };

  return (
    <div className="payment-container">
      <h1>Escolha a forma de pagamento</h1>
      <div className="payment-methods">
        <button onClick={() => handlePaymentSelection('pix')}>Pix</button>
        <button onClick={() => handlePaymentSelection('boleto')}>Boleto</button>
        <button onClick={() => handlePaymentSelection('card')}>Cadastrar Cartão</button>
      </div>
      
      {activePaymentMethod === 'pix' && (
        <div className="payment-detail">
          {/* Exibir QR Code para Pix */}
          <img src="path/to/qr-code.png" alt="QR Code" />
        </div>
      )}
      
      {activePaymentMethod === 'boleto' && (
        <div className="payment-detail">
          {/* Exibir código de barras para Boleto */}
          <img src="path/to/barcode.png" alt="Barcode" />
        </div>
      )}

      {activePaymentMethod === 'card' && (
        <div className="payment-detail card-info">
          <label>Número do Cartão</label>
          <input type="text" />
          <label>Data de Validade (MM/AA)</label>
          <input type="text" />
          <label>CVV</label>
          <input type="text" />
          <label>Nome do Titular</label>
          <input type="text" />
          <button>Cadastrar</button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
