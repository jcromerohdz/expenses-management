import Spent from "./Spent"

const ExpensesList = ({expenses}) => {
	return (
		<div className="listado-gastos contenedor">
			<h2>{expenses.length ? 'Expenses' : 'There is no expences yet!'}</h2>

			{expenses.map( spent => (
				<Spent 
					key={spent.id}
					spent={spent}
				/>
			))}
			
		</div>
	)
}

export default ExpensesList
