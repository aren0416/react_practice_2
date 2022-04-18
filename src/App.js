import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Detail } from "./components/detail/Detail";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/home/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Search } from "./components/search/Search";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
