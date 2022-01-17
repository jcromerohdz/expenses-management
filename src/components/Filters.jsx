import { useState, useEffect } from "react"

const Filters = ({filter, setFilter}) => {
  return (
    <div className="filtros sombra contenedor">
      <form action="">
        <div className="campo">
          <label htmlFor="">Expenses Filter</label>
          <select 
            name="" 
            id=""
            vaule={filter}
            onChange={e => setFilter(e.target.value)}
          >
						<option value="">-- All Categories --</option>
						<option value="saving">Saving</option>
						<option value="food">Food</option>
						<option value="housing">Housing</option>
						<option value="trasportation">Transportation</option>
						<option value="utilities">Utilities</option>
						<option value="healthcare">Healthcare</option>
						<option value="personal">Personal</option>
						<option value="entertainment">Entertainment</option>
						<option value="subscriptions">Subscriptions</option>
          </select>
        </div>
      </form>
      
    </div>
  )
}

export default Filters
