import { Progress } from 'antd'
import { useSelector } from 'react-redux'

import cl from './content-loader.module.scss'

const colorsLoader = { '0%': '#f3f7fa', '100%': '#2196f3' }

export const ContentLoader = () => {
  const percentLoad = useSelector((state) => state.ticketsReducer.percentLoad)

  return (
    <div className={cl['loader']}>
      {/* Показывать индикатор загрузки только если процент загрузки не равен 100% */}
      {percentLoad !== 100 ? (
        <Progress percent={percentLoad} strokeColor={colorsLoader} showInfo={false} trailColor={'transparent'} />
      ) : null}
    </div>
  )
}
