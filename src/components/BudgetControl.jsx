import { useState, useEffect } from "react"

const BudgetControl = ({expenses, budget}) => {

  const [available, setAvailable] = useState(0)
  const [spend, setSpend] = useState(0)

  useEffect(() => {
    const spendTotal = expenses.reduce((total, spent) => spent.amount + total, 0)

    const availableTotal = budget - spendTotal

    setAvailable(availableTotal)
    setSpend(spendTotal)

  }, [expenses])
	
	const formatBudgetAmount = (amount) => {
		return amount.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		})
		
	}

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
				<p>Chart goes here....</p>
			</div>

			<div className="contenido-presupuesto">
				<p>
					<span>Budget: </span>{formatBudgetAmount(budget)}
				</p>
				<p>
					<span>Available: </span>{formatBudgetAmount(available)}
				</p>
				<p>
					<span>Spent: </span>{formatBudgetAmount(spend)}
				</p>
			</div>
			
		</div>
	)
}

export default BudgetControl
