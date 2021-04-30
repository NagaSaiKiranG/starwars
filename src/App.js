import './App.css';
import Home from './pages/home'

function App() {
  const app = <Home />;
  console.log("app", app);
  return (
    <div className="App">
      {app}
    </div>
  );
}

export default App;
