import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </Router>
)

export default App;
