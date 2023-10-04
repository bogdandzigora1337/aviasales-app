import { useDispatch, useSelector } from 'react-redux'
import { Radio } from 'antd'
import { useEffect } from 'react'

import { cheapTicket, fastTicket } from '../../redux/actions'

import './content-tabs__antd.scss'
import cl from './content-tabs.module.scss'

const FilterButtons = ({ selectedFilter, onSelect }) => {
  return (
    <Radio.Group className={`${cl['content__tabs__radio-group']}`} value={selectedFilter}>
      <Radio.Button className={cl['content__tabs__button']} value={'cheapest'} onClick={() => onSelect('cheapest')}>
        самый дешевый
      </Radio.Button>
      <Radio.Button className={cl['content__tabs__button']} value={'fastest'} onClick={() => onSelect('fastest')}>
        самый быстрый
      </Radio.Button>
    </Radio.Group>
  )
}

export default function ContentTabs() {
  const selectedFilter = useSelector((state) => state.checkboxReducer.filter)
  const ticketCountCheck = useSelector((state) => {
    return state.checkboxReducer.data.length
  })
  const dispatch = useDispatch()

  const handleFilterSelect = (filter) => {
    dispatch(filter === 'cheapest' ? cheapTicket() : fastTicket())
  }

  useEffect(() => {
    ticketCountCheck && handleFilterSelect(selectedFilter)
  }, [ticketCountCheck])

  return (
    <>
      {ticketCountCheck ? (
        <div className={cl['content__tabs']}>
          <FilterButtons selectedFilter={selectedFilter} onSelect={handleFilterSelect} />
        </div>
      ) : null}
    </>
  )
}
