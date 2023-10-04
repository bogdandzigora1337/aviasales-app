import ContentTicket from '../content-ticket/content-ticket'
import cl from './content-tickets-list.module.scss'
import { useSelector } from 'react-redux'

export default function ContentTicketsList() {
  const ticketCountCheck = useSelector((reducer) => {
    return reducer.checkboxReducer.data.length
  })

  const errorMessage = useSelector((reducer) => reducer.ticketsReducer.error || reducer.userIdReducer.error)

  return (
    <>
      {ticketCountCheck ? (
        <ul className={cl['content__tickets-list']}>
          <ContentTicket />
        </ul>
      ) : (
        <h1 className={cl['content__tickets-notification']}>
          {errorMessage
            ? 'Обновите страницу, произошла ошибка при получении данных с сервера ⚠️'
            : 'Рейсов, подходящих под заданные фильтры, не найдено ⚠️'}
        </h1>
      )}
    </>
  )
}
