import Navbar from './components/Navbar';
import './index.css';
import { FC } from 'react';

const App: FC = () => {
  return (
    <div className="bg-customGreen min-h-screen">
      <Navbar />
    </div>
  );
};

export default App;
