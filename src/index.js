import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router basename={process.env.PUBLIC_URL}>
			<App />
		</Router>
	</React.StrictMode>
);
