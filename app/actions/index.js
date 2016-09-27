import CONSTANTS from 'constants'

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

export default actionCreators