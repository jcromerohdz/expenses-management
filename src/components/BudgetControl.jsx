const BudgetControl = ({budget}) => {
	
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
					<span>Available: </span>{formatBudgetAmount(0)}
				</p>
				<p>
					<span>Spent: </span>{formatBudgetAmount(0)}
				</p>
			</div>
			
		</div>
	)
}

export default BudgetControl
