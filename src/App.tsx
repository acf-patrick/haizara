import Home from './Components/Home/Home';
import "./App.scss";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "PDAL";
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
