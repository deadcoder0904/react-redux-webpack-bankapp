import React from 'react'
import styles from 'style'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	balance: state.balance,
	error: state.error
});

const displayBalance = ({ error, balance }) => (
							<div className="well-lg">
								<h1 className="text-center well-lg text-uppercase" style={styles}>
								<strong>Current Balance: $ {balance}</strong>
								{error && <div>
											<br /><i className="text-danger">
											You cannot withdraw more than your current Balance
										   </i>
										</div>
								}		   
								</h1>
							</div>
					 		)

export default connect(mapStateToProps)(displayBalance)