import CarritoProvedor from './context/CarritoProvedor';
import Rutas from './routes';


function App() {
  return (
    <div className="container">
         <CarritoProvedor>
        <Rutas />
      </CarritoProvedor>    
    </div>
  );
}

export default App;
