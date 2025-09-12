import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; // Descomente se quiser usar um CSS global

function App() {
  return (
    <div>
      <h1>Armadura Programada</h1>
      <p>Bem-vindo à plataforma!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import React from 'react';import React from 'react';

import ReactDOM from 'react-dom/client';import { createRoot } from 'react-dom/client';

// import './index.css'; // Descomente se quiser usar um CSS globalimport { BrowserRouter } from 'react-router-dom';

import App from './App';

function App() {import './index.css';

  return (

    <div>const container = document.getElementById('root');

      <h1>Armadura Programada</h1>const root = createRoot(container);

      <p>Bem-vindo à plataforma!</p>root.render(

    </div>	<React.StrictMode>

  );		<BrowserRouter>

}			<App />

		</BrowserRouter>

const root = ReactDOM.createRoot(document.getElementById('root'));	</React.StrictMode>

root.render(<App />););

