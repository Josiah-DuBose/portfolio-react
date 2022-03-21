import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
