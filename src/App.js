import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="container"> 
       <Navbar/>
       <section className='row py-4 my-4'>
         <ItemListContainer/>
       </section>
       
    </div>
  );
}

export default App;
