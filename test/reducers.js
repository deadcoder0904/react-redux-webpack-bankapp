import { Map } from 'immutable'

export const initialBalance = () => ({balance: 0});
export const deposit = (balance,action) => ({balance: parseInt(balance) + parseInt(action.payload)});
export const withdraw = (balance,action) => {
							if(parseInt(balance) >= parseInt(action.payload))
								return {balance: parseInt(balance) - parseInt(action.payload)};
							return {balance: parseInt(balance)};
						};