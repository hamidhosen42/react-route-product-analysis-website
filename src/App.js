import './App.css';
import { Routes, Route } from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import DashBoard from './Component/DashBoard/DashBoard';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<DashBoard/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
