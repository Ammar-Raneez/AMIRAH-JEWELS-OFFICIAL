import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
	<StateProvider initialState={initialState} reducer={reducer}>
		<App />
	</StateProvider>,
	document.getElementById('root')
);
