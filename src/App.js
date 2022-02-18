import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

function App() {
  return (
    <div className="container"> 
       <Navbar/>
       <section className='row py-4 my-4'>
         <ItemListContainer/>
         <ItemDetailContainer/>
       </section>
       
    </div>
  );
}

export default App;
