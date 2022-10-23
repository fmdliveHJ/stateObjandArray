import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	// return React.createElement(
	//   'div',
	//   {},
	//   React.createElement('h2', {}, "Let's get started!"),
	//   React.createElement(Expenses, { items: expenses })
	// );

	//새로운 expense추가
	/**
	 * 인자 값으로 얻는 expense를 배열의 요소로 추가하고
	 * 기존의 배열 요소를 가져와서 새배열의 나머지 부분에 기존요소에 함께 넣음
	 * 업데이트를 위해 특별한 함수 폼을 사용해야함
	 */

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
