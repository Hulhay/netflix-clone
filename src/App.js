import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import EmptyPageDownload from './pages/EmptyPageDownload'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<EmptyPageDownload />} />
      </Routes>
    </Router>
  );
}

export default App;
