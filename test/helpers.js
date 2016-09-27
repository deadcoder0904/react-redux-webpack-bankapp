export const initialBalance = () => ({balance: 0, error: false});
export const deposit = (balance,action) => ({balance: parseInt(balance) + parseInt(action.payload), error: false});
export const withdraw = (balance,action) => {
							if(parseInt(balance) >= parseInt(action.payload))
								return {balance: parseInt(balance) - parseInt(action.payload), error: false};
							return {balance: parseInt(balance), error: true};
						};