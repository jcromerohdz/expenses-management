import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"

const Header = ({expenses,setExpenses, budget, setBudget, isBudgetValid, setIsBudgetValid}) => {
  return (
    <header>
      <h1>Expenses Management</h1>
			{isBudgetValid ? (
				<BudgetControl
          expenses={expenses}
          setExpenses={setExpenses}
					budget={budget}
          setBudget={setBudget}
					setIsBudgetValid={setIsBudgetValid}
				/>
			) : (
				<NewBudget 
					budget={budget}
					setBudget={setBudget}
					setIsBudgetValid={setIsBudgetValid}
				/>
			)}
    </header>
  )
}

export default Header
