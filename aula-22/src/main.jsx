import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const root = document.querySelector('#root');
createRoot(root).render(<App />);
