import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles/App.css';
import VehicleDetails from './components/VehicleDetails';
import SellerDetails from './components/SellerDetails';
import Proposta from './components/Proposta';
import Header from './components/Header';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vehicle' | 'seller' | 'proposta'>('vehicle');

  const handleBuyClick = () => {
    // Lógica de compra aqui, mas sem redirecionamento
  };

  const handleSendMessageClick = () => {
    setActiveTab('proposta');
  };

  const handleBackClick = () => {
    setActiveTab('vehicle'); // Voltar para a aba "vehicle"
  };

  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">
        <div className="nav">
          <button className="back-button" onClick={handleBackClick}>←</button>
          <h2>{activeTab === 'proposta' ? 'Enviar Proposta' : 'Detalhes do anúncio'}</h2>
        </div>
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
        <TransitionGroup>
          <CSSTransition
            key={activeTab}
            timeout={300}
            classNames="fade"
          >
            <div>
              {activeTab === 'vehicle' && (
                <VehicleDetails
                  onBuyClick={handleBuyClick}
                  onSendMessageClick={handleSendMessageClick}
                />
              )}
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
