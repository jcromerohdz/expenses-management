import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"

const Header = ({budget, setBudget, isBudgetValid, setIsBudgetValid}) => {
  return (
    <header>
      <h1>Expenses Management</h1>
			{isBudgetValid ? (
				<BudgetControl 
					budget={budget}
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
