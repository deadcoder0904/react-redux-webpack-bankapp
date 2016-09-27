import CONSTANTS from '../constants'
import { deposit, withdraw} from '../../test/helpers'

// Reducers
const allReducers = (state,action) => {
	switch(action.type){
		case CONSTANTS.WITHDRAW_MONEY:
			if(parseInt(state.balance) >= parseInt(action.payload))
					return {
						balance: parseInt(state.balance) - parseInt(action.payload), 
						error: false
					};
			return {
				balance: parseInt(state.balance), 
				error: true
			};
		case CONSTANTS.DEPOSIT_MONEY:
			return {
				balance: parseInt(state.balance) + parseInt(action.payload), 
				error: false
			};
		default:
			return state;
	}
}

export default allReducers