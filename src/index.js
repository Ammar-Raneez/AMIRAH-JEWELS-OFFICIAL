import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import { initialState } from './reducer';

ReactDOM.render(
	<StateProvider initialState={initialState} reducer={}>
		<App />
	</StateProvider>,
	document.getElementById('root')
);
