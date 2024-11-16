import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.tsx';

const target = document.getElementById('root')!;
const root = createRoot(target);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
