import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Hot: FC<IProps> = () => {
  return <div>Hot</div>
}

export default memo(Hot)
