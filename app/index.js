import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
import Balance from './components/displayBalance'
import BankComponent from './components/bank'
import store from './store/'

const App = () => {
	return (
			<div>
				<Header />
				<BankComponent />
				<Balance />
			</div>
	);
};

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('app'));