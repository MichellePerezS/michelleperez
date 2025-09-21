import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />

          {/* (opcional) 404 simple */}
          {/* <Route path="*" element={<About />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;