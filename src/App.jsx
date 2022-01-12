import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import NewSpentIcon from './img/nuevo-gasto.svg'


function App() {
  const [budget, setBudget] = useState(0)
	const [isBudgetValid, setIsBudgetValid] = useState(false)

	const [modal, setModal] = useState(false)
	const [modalAnimation, setModalAnimation] = useState(false)

	const handleNewSpent = () => {
		setModal(true)

		setTimeout(() => {
			setModalAnimation(true)
		}, 1000)

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
								/>}

    </div>
  )
}

export default App
