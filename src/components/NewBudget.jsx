const NewBudget = ({budget, setBudget}) => {
  return (
    <div className="contenedor-presupuesto contendor sombra">
      <form className="formulario" action="">
        <div className="campo">

          <label>Add Budget</label>

          <input 
            className="nuevo-presupuesto"
            type="text" 
            placeholder="Add your budget"
            value={budget}
            onChange={e => setBudget(e.target.value)}
          />

          <input type="submit" value="Add" />
        </div>

      </form>
      
    </div>
  )
}

export default NewBudget
