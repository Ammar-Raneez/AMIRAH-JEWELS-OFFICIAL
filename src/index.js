import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { StateProvider } from './StateProvider';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import reducer, { initialState } from './reducer';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
