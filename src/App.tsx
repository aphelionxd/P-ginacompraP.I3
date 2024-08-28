import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles/App.css';
import VehicleDetails from './components/VehicleDetails';
import SellerDetails from './components/SellerDetails';
import Proposta from './components/Proposta';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vehicle' | 'seller' | 'proposta'>('vehicle');

  const handleBuyClick = () => {
    setActiveTab('proposta');
  };

  const handleSendMessageClick = () => {
    setActiveTab('proposta');
  };

  const handleBackClick = () => {
    setActiveTab('vehicle'); // ou 'seller', dependendo de qual página você quer voltar
  };

  return (
    <div className="container">
      {/* Topo da Página */}
      <div className="header">
        <button className="back-button" onClick={handleBackClick}>←</button>
        <h2>{activeTab === 'proposta' ? 'Enviar Proposta' : 'Detalhes do anúncio'}</h2>
      </div>

      {/* Aba de Navegação */}
      {activeTab !== 'proposta' && (
        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'vehicle' ? 'active' : ''}`}
            onClick={() => setActiveTab('vehicle')}
          >
            Veículo
          </button>
          <button
            className={`tab-button ${activeTab === 'seller' ? 'active' : ''}`}
            onClick={() => setActiveTab('seller')}
          >
            Vendedor
          </button>
        </div>
      )}

      {/* Conteúdo Dinâmico com Animação */}
      <div className="content">
        <TransitionGroup>
          <CSSTransition
            key={activeTab}
            timeout={300}
            classNames="fade"
          >
            <div>
              {activeTab === 'vehicle' && <VehicleDetails onBuyClick={handleBuyClick} onSendMessageClick={handleSendMessageClick} />}
              {activeTab === 'seller' && <SellerDetails />}
              {activeTab === 'proposta' && <Proposta />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
