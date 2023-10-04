import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getUserId } from '../../redux/actions'
import Header from '../header/header'
import Content from '../content/content'
import { ContentLoader } from '../content-loader/content-loader'

import cl from './app.module.scss'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserId())
  }, [dispatch])

  return (
    <div className={cl['app']}>
      <ContentLoader />
      <Header />
      <Content />
    </div>
  )
}
