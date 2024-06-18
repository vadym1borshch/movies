import { FC, useState } from 'react'
import { Icon } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { iconStyle } from './styles'
import {
  generateListFromNumber,
  splitStyles,
} from '../../commonFiles/commonFunctions'

interface IRatingProps {
  numOfRatingsPoint?: number
  pointColor?: string
  pointSize?: number
  onRatingStatus?: (value: number) => void
  callback?: (value: number) => void
}

const Rating: FC<IRatingProps> = ({
  numOfRatingsPoint = 10,
  pointColor = 'red',
  pointSize = 20,
  callback,
}) => {
  const ratingPoints = generateListFromNumber(numOfRatingsPoint)
  const [checked, setChecked] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)

  const isFilled = (point: number): string => {
    if (hover && hover >= point) return pointColor
    if (checked >= point) return pointColor
    return 'none'
  }

  const handleChecked = (value: number) => {
    setChecked(value)
    callback && callback(value)
  }

  return (
    <>
      {ratingPoints.map((point) => {
        return (
          <Icon
            onMouseEnter={() => setHover(point)}
            onMouseLeave={() => setHover(0)}
            key={point}
            onClick={() => handleChecked(point)}
            sx={splitStyles(
              {
                width: `${pointSize}px`,
                height: `${pointSize}px`,
                '& svg': {
                  stroke: pointColor,
                  fill: `${isFilled(point)}`,
                },
              },
              iconStyle,
            )}
          >
            <StarIcon />
          </Icon>
        )
      })}
      <span style={{ color: pointColor }}>: {hover || checked || ''}</span>
    </>
  )
}

export default Rating
