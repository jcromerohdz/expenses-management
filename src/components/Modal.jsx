import { useState } from 'react'
import BtnClose from '../img/cerrar.svg'

const Modal = ({setModal, modalAnimation, setModalAnimation}) => {

	const [name, setName] = useState('')
	const [amount, setAmount] = useState(0)
	const [category, setCategory] = useState('')

	const closeModal = () => {
		
		setModalAnimation(false)

		setTimeout(() => {
			setModal(false)
		}, 200)
	}

	return (
		<div className="modal">
			<div className="cerrar-modal">
				<img 
					src={BtnClose} 
					alt="close modal" 
					onClick={closeModal}
				/>

			</div>

			<form className={`formulario ${modalAnimation ? "animar" : "cerrar"}`} action="">
				<legend>New Spent</legend>

				<div className="campo">
					<label htmlFor="name">Spent Name</label>
					<input 
						id="name"
						type="text" 
						placeholder='Add spent name'
						value={name}
						onChange={ e => setName(e.target.value)}
					/>
				</div>
				<div className="campo">
					<label htmlFor="amount">Spent Amount</label>
					<input 
						id="amount"
						type="number" 
						placeholder='Add spent amount: E.g. 300'
						value={amount}
						onChange={ e => setAmount(e.target.value)}
					/>
				</div>
				<div className="campo">
					<label htmlFor="category">Spent Category</label>
					<select 
						name="" 
						id="categoria"
						value={category}
						onChange={ e => setCategory(e.target.value)}
					>
						<option value="">-- Select --</option>
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

				<input 
					type="submit" 
					value="Add Spent"
				/>
			</form>
			
		</div>
	)
}

export default Modal
