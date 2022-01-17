import Spent from "./Spent"

const ExpensesList = ({expenses, setEditSpent, deleteSpent, filter, filteredExpenses}) => {
	return (
		<div className="listado-gastos contenedor">
			

      {
        filter ? (
          <>
            <h2>{filteredExpenses.length ? 'Expenses' : 'There is no expences fot this category!'}</h2>
            { 
              filteredExpenses.map( spent => (
                <Spent 
                  key={spent.id}
                  spent={spent}
                  setEditSpent={setEditSpent}
                  deleteSpent={deleteSpent}
                />
              ))
            }
          </>
        ) : (
          <>
            <h2>{expenses.length ? 'Expenses' : 'There is no expences yet!'}</h2>
            {
              expenses.map( spent => (
                <Spent 
                  key={spent.id}
                  spent={spent}
                  setEditSpent={setEditSpent}
                  deleteSpent={deleteSpent}
                />
              ))
            }  
          </>
        )
      }

			{/* {expenses.map( spent => (
				<Spent 
					key={spent.id}
					spent={spent}
          setEditSpent={setEditSpent}
          deleteSpent={deleteSpent}
				/>
			))} */}
			
		</div>
	)
}

export default ExpensesList
