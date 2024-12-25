import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Newest: FC<IProps> = () => {
  return <div>Newest</div>
}

export default memo(Newest)
