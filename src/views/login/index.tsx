import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector, useAppDispatch, shallowEqualApp } from '@/store'
import { increment, decrement } from '@/store/counter'
import njRequest from '@/service'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  const { value } = useAppSelector(
    (state) => ({
      value: state.counter.value
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  function handleIncrement() {
    dispatch(increment())
  }
  function handleDecrement() {
    dispatch(decrement())
  }

  useEffect(() => {
    njRequest
      .post({
        url: '/user/login'
      })
      .then((res) => {
        console.log(res)
      })
  })
  return (
    <div>
      <div>{value}</div>
      <button onClick={handleIncrement}>增加</button>
      <button onClick={handleDecrement}>减少</button>
    </div>
  )
}

export default memo(Login)
