import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import ExpensesList from './components/ExpensesList'
import Modal from './components/Modal'
import { generateId } from './helpers'
import NewSpentIcon from './img/nuevo-gasto.svg'


function App() {
  const [budget, setBudget] = useState(localStorage.getItem('budget') ?? 0)
	const [isBudgetValid, setIsBudgetValid] = useState(false)

	const [modal, setModal] = useState(false)
	const [modalAnimation, setModalAnimation] = useState(false)
	const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  )

  const [editSpent, setEditSpent] = useState({})

  const [filter, setFilter] = useState('')
  const [filteredExpenses, setFilteredExpenses] = useState([])

  useEffect(() => {
    if(Object.keys(editSpent).length > 0){
      console.log('Edit Spent has something....')
      setModal(true)

      setTimeout(() => {
        setModalAnimation(true)
      }, 1000)
    }

  }, [ editSpent])

  useEffect(() => {
    Number(localStorage.setItem('budget', budget ?? 0))
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])

  }, [expenses])

  useEffect(() => {
    if(filter) {
      //Filter expenses by category name
      const filteredExpenses = expenses.filter(spent => spent.category === filter)
      console.log(filteredExpenses)
      setFilteredExpenses(filteredExpenses)
    }

  }, [filter])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0

    if(budgetLS > 0) {
      setIsBudgetValid(true)
    }

  }, [])

	const handleNewSpent = () => {
		setModal(true)
    setEditSpent({})

		setTimeout(() => {
			setModalAnimation(true)
		}, 1000)
	}

	const saveSpent = spent => {
    if(spent.id){
      const updatedExpenses = expenses.map(spentState => spentState.id === spent.id ? spent : spentState)
      setExpenses(updatedExpenses)
      setEditSpent({})

    }else{
      spent.id = generateId()
      spent.date = Date.now()
      setExpenses([...expenses, spent])
    }

		setModalAnimation(false)

		setTimeout(() => {
			setModal(false)
		}, 200)
	}

  const deleteSpent = id => {
    console.log('deleting', id)
    const updatedExpenses = expenses.filter( spent => spent.id !== id)

    setExpenses(updatedExpenses)

  }

  return (
    <div className={modal ? 'fijar': ''}>
      <Header 
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
				isBudgetValid={isBudgetValid}
				setIsBudgetValid={setIsBudgetValid}
      />

			{isBudgetValid && (
				<>
					<main>
            <Filters 
              filter={filter}
              setFilter={setFilter}
            />
						<ExpensesList 
							expenses={expenses}
              setEditSpent={setEditSpent}
              deleteSpent={deleteSpent}
              filter={filter}
              filteredExpenses={filteredExpenses}
						/>
					</main>
					<div className='nuevo-gasto'>
						<img 
							src={NewSpentIcon} 
							alt="new spent icon" 
							onClick={handleNewSpent}
						/>
					</div>
				</>
			)}

			{modal && <Modal 
									setModal={setModal} 
									modalAnimation={modalAnimation}
									setModalAnimation={setModalAnimation}
									saveSpent={saveSpent}
                  editSpent={editSpent}
                  setEditSpent={setEditSpent}
								/>}

    </div>
  )
}

export default App
