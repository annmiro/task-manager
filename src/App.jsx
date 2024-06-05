import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MainProvider from "./context/MainProvider";

function App() {
  return (
    <MainProvider>
      <div className="app">
        <Header />
        <Main />
      </div>
    </MainProvider>
  );
}

export default App;
