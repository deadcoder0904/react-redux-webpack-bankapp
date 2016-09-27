import { expect } from 'chai'
import { Map } from 'immutable'
import { initialBalance, deposit, withdraw } from './helpers'

describe('bank app', () => {

	describe('Initial state', () => {
		it('should have a initial state', () => {
			const balance = initialBalance();
			expect(balance).to.deep.equal({balance: 0, error: false});
		});
	});

	describe('Deposit Amount', () => {
		it('should deposit amount',() => {
			const balance = deposit(initialBalance().balance,{payload: 250});
			expect(balance).to.deep.equal({balance: 250, error: false});		
		}); 
	});

	describe('Withdraw Amount', () => {
		it('will withdraw if balance is more than or equal to withdraw amount',() => {
			const depositAmount = deposit(initialBalance().balance,{payload: 500});
			const balance = withdraw(depositAmount.balance,{payload: 250});
			expect(balance).to.deep.equal({balance: 250, error: false});
		});

		it('won\'t withdraw if balance is less than withdraw amount',() => {
			const depositAmount = deposit(initialBalance().balance,{payload: 350});
			const balance = withdraw(depositAmount.balance,{payload: 400});
			expect(balance).to.deep.equal({balance: 350, error: true});
		});
	});
});