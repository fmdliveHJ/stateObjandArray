import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (eExpenseData) => {
		const expenseData = {
			...eExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm saveData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
