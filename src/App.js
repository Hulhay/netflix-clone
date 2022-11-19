import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Search from "./pages/Search";
import EmptyPageDownload from './pages/EmptyPageDownload'
import NowWatching from "./pages/NowWatching";
import More from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/now-watching" element={<NowWatching/>}/>
        <Route path="/download" element={<EmptyPageDownload />} />
        <Route path="/about" element={<More />} />
      </Routes>
    </Router>
  );
}

export default App;
