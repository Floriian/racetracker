import Footer from './footer';
import Hero from './hero';
import Navbar from './navbar';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
