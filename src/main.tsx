import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx: Script loaded');
console.log('Main.tsx: DOM state:', document.readyState);
console.log('Main.tsx: Root element:', document.getElementById("root"));

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log('Main.tsx: Creating React root');
  const root = createRoot(rootElement);
  console.log('Main.tsx: Rendering App');
  root.render(<App />);
  console.log('Main.tsx: App rendered');
} else {
  console.error('Main.tsx: Root element not found!');
}
