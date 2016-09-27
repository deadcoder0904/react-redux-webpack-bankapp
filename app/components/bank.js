import React, { Component } from 'react'
import { Button, Row, Col, Grid , FormGroup, FormControl} from 'react-bootstrap'
import { initialBalance } from '../../test/helpers'
import actionCreators from '../actions/'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	balance: state.balance
});

// console.log(typeof actionCreators.deposit(321));

// MapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
	depositAmount: (amount) => dispatch(actionCreators.deposit(amount)),
	withdrawAmount: (amount) => dispatch(actionCreators.withdraw(amount))
});

class bank extends Component {
	constructor(props) {
		super(props);
		this.state = {amount: ""};
		this.changeAmount = this.changeAmount.bind(this);
		this.callDepositAmount = this.callDepositAmount.bind(this);
		this.callWithdrawAmount = this.callWithdrawAmount.bind(this);
	}

	changeAmount(e){
		this.setState({amount: parseInt(e.target.value)});
	}

	callDepositAmount(amount){
		if(amount)
			{
				const { balance, depositAmount } = this.props;	
				depositAmount(amount);
			}
	}

	callWithdrawAmount(amount){
			if(amount)	
				{
					const { balance, withdrawAmount } = this.props;
					withdrawAmount(amount);
				}
	}

	render(){
		const { amount } = this.state;
		return (
				<Grid>
					<Row className="show-grid">
						<Col xs={12}>
							<form>
						        <FormGroup bsSize="lg" controlId="formBasicText" >
								<FormControl type="text" value={this.state.amount || ""} placeholder="Enter the amount" 
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
			)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(bank);