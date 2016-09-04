import { expect } from 'chai'
import { Map } from 'immutable'
import { initialBalance, deposit, withdraw } from './reducers'

describe('bank app', () => {

	describe('Initial state', () => {
		it('should have a initial state', () => {
			const balance = initialBalance();
			expect(balance).to.deep.equal({balance: 0});
		});
	});

	describe('Deposit Amount', () => {
		it('should deposit amount',() => {
			const balance = deposit(initialBalance().balance,{payload: 250});
			expect(balance).to.deep.equal({balance: 250});		
		}); 
	});

	describe('Withdraw Amount', () => {
		it('will withdraw if balance is more than or equal to withdraw amount',() => {
			const depositAmount = deposit(initialBalance().balance,{payload: 500});
			const balance = withdraw(depositAmount.balance,{payload: 250});
			expect(balance).to.deep.equal({balance: 250});
		});

		it('won\'t withdraw if balance is less than withdraw amount',() => {
			const depositAmount = deposit(initialBalance().balance,{payload: 350});
			const balance = withdraw(depositAmount.balance,{payload: 400});
			expect(balance).to.not.deep.equal({balance: -50});
		});
	});
});