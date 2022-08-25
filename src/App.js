import './App.css';
import GlobalStateContext from './context/GlobalStateContext';
import Rutas from './routes/Rutas';

function App() {

  window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ?
  document.querySelector('body').style = 'background-color: #FCFCFC' :
  document.querySelector('body').style = 'background-color: #1e1e1e'

  return (
    <>
      <GlobalStateContext>
        <Rutas/>
      </GlobalStateContext>
    </>
  );
}

export default App;