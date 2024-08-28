import React from 'react';

interface VehicleDetailsProps {
  onBuyClick: () => void;
  onSendMessageClick: () => void;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ onBuyClick, onSendMessageClick }) => {
  const car = {
    imageUrl: 'https://via.placeholder.com/800x600.png?text=Car+Image',
    brand: 'Marca',
    model: 'Modelo',
    price: 150000,
    seller: 'Nome do Vendedor',
    city: 'Cidade',
    transmission: 'Automático',
    manufactureYear: 2020,
    bodyType: 'Sedan',
    modelYear: 2021,
    fuelType: 'Gasolina',
    mileage: 30000,
    color: 'Preto',
    description: 'Descrição detalhada do veículo.'
  };

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div>
      {/* Seção de Imagem */}
      <div className="car-image">
        <img src={car.imageUrl} alt={`${car.brand} ${car.model}`} />
      </div>

      {/* Informações do Veículo */}
      <div className="car-details">
        <h1>{car.brand} {car.model}</h1>
        <h2>{formatCurrency(car.price)}</h2>
        <div className="details-section">
          <h3>Detalhes do Anúncio</h3>
          <div className="details-columns">
            <div className="details-column">
              <p><strong>Veículo:</strong> {car.model}</p>
              <p><strong>Vendedor:</strong> {car.seller}</p>
              <p><strong>Marca:</strong> {car.brand}</p>
              <p><strong>Modelo:</strong> {car.model}</p>
              <p><strong>Cidade:</strong> {car.city}</p>
              <p><strong>Câmbio:</strong> {car.transmission}</p>
            </div>
            <div className="details-column">
              <p><strong>Ano de Fabricação:</strong> {car.manufactureYear}</p>
              <p><strong>Carroceria:</strong> {car.bodyType}</p>
              <p><strong>Ano de Modelo:</strong> {car.modelYear}</p>
              <p><strong>Combustível:</strong> {car.fuelType}</p>
              <p><strong>KM:</strong> {car.mileage.toLocaleString('pt-BR')} km</p>
              <p><strong>Cor:</strong> {car.color}</p>
            </div>
          </div>
          <h3>Descrição do Veículo</h3>
          <p>{car.description}</p>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="buttons">
        <button className="buy-button" onClick={onBuyClick}>Comprar</button>
        <button className="call-button">📞</button>
        <button className="message-button" onClick={onSendMessageClick}>Enviar Mensagem</button>
      </div>
    </div>
  );
};

export default VehicleDetails;
