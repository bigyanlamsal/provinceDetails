import './App.css';
import Header from './components/header';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import City from './components/city/insex';



function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
        {/* <Route path="province1" > */}
          <Route path="province1/:city" element={<City />} />
        {/* </Route>   */}
    </Routes>
    </div>
  );
}

export default App;
