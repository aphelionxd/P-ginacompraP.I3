import './App.css';

interface CarDetails {
  imageUrl: string;
  brand: string;
  model: string;
  price: number;
  seller: string;
  city: string;
  transmission: string;
  manufactureYear: number;
  bodyType: string;
  modelYear: number;
  fuelType: string;
  mileage: number;
  color: string;
  description: string;
}

const car: CarDetails = {
  imageUrl: '../public/img/car.jpg', // URL da imagem do carro
  brand: 'Marca Exemplo',
  model: 'Modelo Exemplo',
  price: 1000000,
  seller: 'Vendedor Exemplo',
  city: 'Cidade Exemplo',
  transmission: 'Automático',
  manufactureYear: 2022,
  bodyType: 'SUV',
  modelYear: 2023,
  fuelType: 'Gasolina',
  mileage: 15000,
  color: 'Preto',
  description: 'Descrição detalhada do veículo que pode incluir informações sobre desempenho, características especiais, e outros detalhes importantes.',
};

export default function App() {
  function formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  return (
    <div className="container">
      <div className="car-image">
        <img src={car.imageUrl} alt={`${car.brand} ${car.model}`} />
      </div>
      <div className="car-details">
        <h1>{car.brand} {car.model}</h1>
        <h2>{formatCurrency(car.price)}</h2>
        <div className="details-section">
          <h3>Detalhes do Anúncio</h3>
          <div className="details">
            <p><strong>Veículo:</strong> {car.model}</p>
            <p><strong>Vendedor:</strong> {car.seller}</p>
            <p><strong>Marca:</strong> {car.brand}</p>
            <p><strong>Modelo:</strong> {car.model}</p>
            <p><strong>Cidade:</strong> {car.city}</p>
            <p><strong>Câmbio:</strong> {car.transmission}</p>
            <p><strong>Ano de Fabricação:</strong> {car.manufactureYear}</p>
            <p><strong>Carroceria:</strong> {car.bodyType}</p>
            <p><strong>Ano de Modelo:</strong> {car.modelYear}</p>
            <p><strong>Combustível:</strong> {car.fuelType}</p>
            <p><strong>KM:</strong> {car.mileage.toLocaleString('pt-BR')} km</p>
            <p><strong>Cor:</strong> {car.color}</p>
          </div>
          <h3>Descrição do Veículo</h3>
          <p>{car.description}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="buy-button">Comprar</button>
        <button className="call-button">📞</button>
        <button className="message-button">Enviar Mensagem</button>
      </div>
    </div>
  );
}
