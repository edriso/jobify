import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>dashboard</div>} />
        <Route path="/register" element={<div>register</div>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
