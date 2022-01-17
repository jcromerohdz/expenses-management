import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({
        expenses, 
        setExpenses,
        budget,
        setBudget,
				setIsBudgetValid
  }) => {

  const [percentage, setPercentage] = useState(0)
  const [available, setAvailable] = useState(0)
  const [spend, setSpend] = useState(0)

  useEffect(() => {
    const spendTotal = expenses.reduce((total, spent) => spent.amount + total, 0)

    const availableTotal = budget - spendTotal

    // Calculate spent percentage
    const newPercentage = ((( budget - availableTotal) / budget) * 100).toFixed(2)

    setPercentage(newPercentage)

    setAvailable(availableTotal)
    setSpend(spendTotal)

  }, [expenses])
	
	const formatBudgetAmount = (amount) => {
		return amount.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		})
		
	}

  const handleResetApp = () => {
    console.log("reseting the app....")
    const result = confirm("Are you sure you want to reset all expenses management data?")

    if(result){
      console.log('si')
      setExpenses([])
      setBudget(0)
      setIsBudgetValid(false)
    }
  }

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? '#E60965' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: percentage > 100 ? '#E60965' : '#3B82F6'
          })}
          value={percentage}
          text={`${percentage}% Spent`}
        />
			</div>

			<div className="contenido-presupuesto">
        <button 
          className="reset-app" 
          type="button"
          onClick={handleResetApp}
        >
          Reset App
        </button>
				<p>
					<span>Budget: </span>{formatBudgetAmount(budget)}
				</p>
				<p className={`${available < 0 ? 'negativo' : ''}`}>
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
