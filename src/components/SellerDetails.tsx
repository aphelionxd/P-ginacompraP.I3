import React from 'react';

const SellerDetails: React.FC = () => {
  return (
    <div className='container'>
      {/* Seção de Perfil do Vendedor */}
      <div className="seller-profile">
        <img
          src="https://via.placeholder.com/100x100.png?text=Profile"
          alt="Foto do vendedor"
          className="profile-img"
        />
        <div>
          <h2>Nome do Vendedor</h2>
          <p>Localização: -----</p>
        </div>
      </div>

      {/* Seção de Conquistas */}
      <div className="achievements">
        <h3>Conquistas</h3>
        <p>Desde: 01/2089</p>
        <p>Anunciou mais de 400 carros</p>
        <p>Tempo médio de resposta: 10 horas</p>
      </div>

      {/* Botões de Ação */}
      <div className="actions">
        <button className="buy-button">Comprar</button>
        <button className="message-button">Enviar Mensagem</button>
      </div>
    </div>
  );
};

export default SellerDetails;
