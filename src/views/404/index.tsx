import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const NotFound: FC<IProps> = () => {
  return <div>404</div>
}

export default memo(NotFound)
