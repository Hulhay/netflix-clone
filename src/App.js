import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Search from "./pages/Search";
import EmptyPageDownload from './pages/EmptyPageDownload'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/download" element={<EmptyPageDownload />} />
      </Routes>
    </Router>
  );
}

export default App;
