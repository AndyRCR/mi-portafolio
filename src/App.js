import './App.css';
import GlobalStateContext from './context/GlobalStateContext';
import Rutas from './routes/Rutas';

function App() {
  
  return (
    <>
      <GlobalStateContext>
        <Rutas/>
      </GlobalStateContext>
    </>
  );
}

export default App;