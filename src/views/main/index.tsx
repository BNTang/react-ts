import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/main/newest">推荐</Link>
        <Link to="/main/hot">排行榜</Link>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Main)
