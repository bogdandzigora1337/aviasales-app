import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from 'antd'

import { allTickets, toggleCheckbox } from '../../redux/actions'
import { cheapTicket, fastTicket } from '../../redux/actions'

import cl from './content-filter.module.scss'

const FilterCheckbox = ({ label, checked, onClick }) => {
  return (
    <Checkbox className={cl['content-filter__checkbox']} onClick={onClick} checked={checked}>
      {label}
    </Checkbox>
  )
}

export default function ContentFilter() {
  const dispatch = useDispatch()
  const { transferAllTicket, transferState } = useSelector((res) => res.checkboxReducer)
  const ticketsReceived = useSelector((reducers) => {
    return reducers.ticketsReducer.data ? [].concat(...reducers.ticketsReducer.data) : []
  })
  const ticketFilter = useSelector((state) => state.checkboxReducer.filter)

  const handleAllTicketsFilterClick = () => {
    dispatch(allTickets(ticketsReceived))
    dispatch(ticketFilter === 'cheapest' ? cheapTicket() : fastTicket())
  }

  const handleOtherStatusTicketsClick = (action) => {
    dispatch(toggleCheckbox(action, ticketsReceived))
    dispatch(ticketFilter === 'cheapest' ? cheapTicket() : fastTicket())
  }

  return (
    <div className={cl['content-filter']}>
      <h1 className={cl['content-filter__title']}>количество пересадок</h1>
      <div className={cl['content-filter__list-checkbox']}>
        <FilterCheckbox label="Все" checked={transferAllTicket} onClick={handleAllTicketsFilterClick} />
        <FilterCheckbox
          label="Без пересадок"
          checked={transferState.nonStopTickets}
          onClick={() => handleOtherStatusTicketsClick('nonStop')}
        />
        <FilterCheckbox
          label="1 пересадка"
          checked={transferState.oneStopTickets}
          onClick={() => handleOtherStatusTicketsClick('oneStop')}
        />
        <FilterCheckbox
          label="2 пересадки"
          checked={transferState.twoStopTickets}
          onClick={() => handleOtherStatusTicketsClick('twoStop')}
        />
        <FilterCheckbox
          label="3 пересадки"
          checked={transferState.threeStopTickets}
          onClick={() => handleOtherStatusTicketsClick('threeStop')}
        />
      </div>
    </div>
  )
}
