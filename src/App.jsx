import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { generateId } from './helpers'
import NewSpentIcon from './img/nuevo-gasto.svg'


function App() {
  const [budget, setBudget] = useState(0)
	const [isBudgetValid, setIsBudgetValid] = useState(false)

	const [modal, setModal] = useState(false)
	const [modalAnimation, setModalAnimation] = useState(false)
	const [expenses, setExpenses] = useState([])

	const handleNewSpent = () => {
		setModal(true)

		setTimeout(() => {
			setModalAnimation(true)
		}, 1000)
	}

	const saveSpent = spent => {
		spent.id = generateId()
		setExpenses([...expenses, spent])


		setModalAnimation(false)

		setTimeout(() => {
			setModal(false)
		}, 200)
	}

  return (
    <div>
      <Header 
        budget={budget}
        setBudget={setBudget}
				isBudgetValid={isBudgetValid}
				setIsBudgetValid={setIsBudgetValid}
      />

			{isBudgetValid && (
				<div className='nuevo-gasto'>
					<img 
						src={NewSpentIcon} 
						alt="new spent icon" 
						onClick={handleNewSpent}
					/>
				</div>
			)}

			{modal && <Modal 
									setModal={setModal} 
									modalAnimation={modalAnimation}
									setModalAnimation={setModalAnimation}
									saveSpent={saveSpent}
								/>}

    </div>
  )
}

export default App
