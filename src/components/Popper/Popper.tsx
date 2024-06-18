import React from 'react'
import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import { FC } from 'react'

interface IPopperProps {
  children: React.ReactNode
  open: boolean
  anchorEl: HTMLElement | null
  id: 'transition-popper' | undefined
}

export const TransitionsPopper: FC<IPopperProps> = ({
  children,
  open,
  anchorEl,
  id,
}) => {
  return (
    <div>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                border: 1,
                p: 1,
                bgcolor: 'background.paper',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {children}
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  )
}
