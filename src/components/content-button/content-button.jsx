import cl from './content-button.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { moreTickets } from '../../redux/actions'
import { Button } from 'antd'

const getShowMoreTicketsText = (countCheck, countDisplayed) => {
  const remainingTickets = countCheck - countDisplayed

  return remainingTickets > 0 ? `Показать еще ${Math.min(5, remainingTickets)} билетов` : null
}

export default function ContentButton() {
  const ticketCountCheck = useSelector((state) => {
    return state.checkboxReducer.data.length
  })
  const ticketCountDisplayed = useSelector((state) => {
    return state.moreTicketsReducer.numberTickets
  })
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(moreTickets(5))
  }

  const showMoreTicketsText = getShowMoreTicketsText(ticketCountCheck, ticketCountDisplayed)

  return (
    <>
      {showMoreTicketsText && (
        <Button type="primary" block className={cl['content__button']} onClick={handleClick}>
          {showMoreTicketsText}
        </Button>
      )}
    </>
  )
}
