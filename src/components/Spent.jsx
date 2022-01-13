import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css" 

import { DateFormating } from "../helpers"

import SavingsIcon from '../img/icono_ahorro.svg'
import HouseIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import SpentIcon from '../img/icono_gastos.svg'
import EntertainmentIcon from '../img/icono_ocio.svg'
import HelthIcon from '../img/icono_salud.svg'
import SubscriptionIcon from '../img/icono_suscripciones.svg'

const dicIcons = {
	saving: SavingsIcon,
	food: FoodIcon,
	housing: HouseIcon,
	trasportation: SpentIcon,
	utilities: SpentIcon,
	healthcare: HelthIcon,
	personal: SpentIcon,
	entertainment: EntertainmentIcon, 
	subscriptions: SubscriptionIcon
}

const Spent = ({spent}) => {

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.log('Editing...')}>
        Edit
      </SwipeAction>
    </LeadingActions>
  )
 

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('Deleting...')}>
        Delete
      </SwipeAction>
    </TrailingActions>

  )

	return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={dicIcons[spent.category]} alt="category icon" />

            <div className="descripcion-gasto">
              <p className="categoria">{spent.category}</p>
              <p className="nombre-gasto">{spent.name}</p>
              <p className="fecha-gasto">
                Added since: {''}
                <span>{DateFormating(spent.date)}</span>
              </p>
            </div>

          </div>
            <p className="cantidad-gasto">${spent.amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
	)
}

export default Spent
