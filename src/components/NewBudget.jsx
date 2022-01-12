import { useState } from "react"
import Message from "./Message"

const NewBudget = ({budget, setBudget, setIsBudgetValid}) => {

	const [message, setMessage] = useState('') 
	

	const handleBudget = (e) => {
		e.preventDefault()

		console.log('Sending Form...')
		if(!budget || budget < 0){
			setMessage('The Budget is not valid! 🥴')

			return
		}
		setMessage('')
		setIsBudgetValid(true)

	}

  return (
    <div className="contenedor-presupuesto contendor sombra">
      <form onSubmit={handleBudget} className="formulario" action="">
        <div className="campo">

          <label>Add Budget</label>

          <input 
            className="nuevo-presupuesto"
            type="number" 
            placeholder="Add your budget"
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />

          <input type="submit" value="Add" />

					{message && <Message type={"error"}>{message}</Message>}
        </div>

      </form>
      
    </div>
  )
}

export default NewBudget
