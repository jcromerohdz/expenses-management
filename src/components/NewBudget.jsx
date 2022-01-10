const NewBudget = () => {
  return (
    <div className="contenedor-presupuesto contendor sombra">
      <form className="formulario" action="">
        <div className="campo">

          <label>Add Budget</label>

          <input 
            className="nuevo-presupuesto"
            type="text" 
            placeholder="Add your budget"
          />

          <input type="submit" value="Add" />
        </div>

      </form>
      
    </div>
  )
}

export default NewBudget
