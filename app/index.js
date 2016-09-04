import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import thunk from 'redux-thunk'
import CONSTANTS from './constants'
import { Map } from 'immutable'
import { initialBalance, deposit, withdraw } from '../test/reducers'
import { Button, Row, Col, Grid , FormGroup, FormControl} from 'react-bootstrap'

// Reducers
const allReducers = (state,action) => {
	switch(action.type){
		case CONSTANTS.WITHDRAW_MONEY:
			return withdraw(state.balance,action);
		case CONSTANTS.DEPOSIT_MONEY:
			return deposit(state.balance,action);
		default:
			return state;
	}
}

// ActionCreators
const actionCreators = {
	withdraw(amount){
		return {
			type: CONSTANTS.WITHDRAW_MONEY,
			payload: amount
		}
	},
	deposit(amount){
		return {
			type: CONSTANTS.DEPOSIT_MONEY,
			payload: amount
		}
	}
}

// InitialState
const initialState = initialBalance();

// MapStateToProps
const mapStateToProps = (state) => ({
	balance: state.balance
});

// MapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
	depositAmount: (amount) => dispatch(actionCreators.deposit(amount)),
	withdrawAmount: (amount) => dispatch(actionCreators.withdraw(amount))
});

class Bank extends Component {
	constructor(props) {
		super(props);
		this.state = {amount: "", error: false};
		this.changeAmount = this.changeAmount.bind(this);
		this.callDepositAmount = this.callDepositAmount.bind(this);
		this.callWithdrawAmount = this.callWithdrawAmount.bind(this);
	}

	setError(error){
		this.setState({error});
	}

	changeAmount(e){
		this.setState({amount: parseFloat(e.target.value)});
	}

	callDepositAmount(amount){
		if(this.state.amount)
			{
				this.props.depositAmount(amount);
				this.setError(false);
			}
	}

	callWithdrawAmount(amount){
		if (this.state.amount > this.props.balance)
			this.setError(true);
		else 
			if(this.state.amount)	
				{
					this.props.withdrawAmount(amount);
					this.setError(false);
				}
	}

	render(){
		const { amount, error } = this.state;
		const { balance } = this.props;
		return (
			<div>
				{/*Heading Start*/}
				<div className="well-lg">
					<h1 className="text-center well-lg"><b>THE REDUX BANK</b></h1>
				</div>
				{/*Heading End*/}
				
				{/*Bank Start*/}
				<Grid>
					<Row className="show-grid">
						<Col xs={12}>
							<form>
						        <FormGroup bsSize="lg" controlId="formBasicText" >
								<FormControl type="text" value={this.state.amount} placeholder="Enter the amount" 
										onChange={this.changeAmount}  style={{textAlign:"center"}}/>
								</FormGroup>
							</form>
						</Col>
					</Row>	
					<Row className="show-grid">
						<Col sm={4} xs={12}>
							<Button bsSize="large" bsStyle="success" onClick={() => this.callDepositAmount(amount)} block> 
								DEPOSIT_MONEY 
							</Button>
						</Col>
						<Col sm={4} xs={12}></Col>
						<Col sm={4} xs={12}>
							<Button bsSize="large" bsStyle="danger" onClick={() => this.callWithdrawAmount(amount)} block>
								WITHDRAW_MONEY 
							</Button>
						</Col>
					</Row>
				</Grid>
				{/*Bank End*/}
				
				{/*Balance Start*/}
				<div className="well-lg">
					<hgroup>
						<h1 className="text-center text-info well-lg">
						Current Balance: Rs. {balance}
						{error && <div>
									<br /><i className="text-danger">
									You cannot withdraw more than your current Balance
								   </i>
								</div>
						}		   
						</h1>
					</hgroup>
				</div>
				{/*Balance End*/}
			</div>
		);
	}
}

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleWare(allReducers,initialState,
    									window.devToolsExtension && window.devToolsExtension());

const App = connect(mapStateToProps,mapDispatchToProps)(Bank);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('app'));