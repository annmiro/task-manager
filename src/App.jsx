import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ThemeProvider from "./utils/Theme";

function App() {

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
