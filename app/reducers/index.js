import CONSTANTS from '../constants'
import { deposit, withdraw} from '../../test/helpers'

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

export default allReducers