import Head from 'next/head'
import { increment, decrement, incrementByAmount } from '../state/slices/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch();
  const value = useSelector((state)=>state.counterSlice.value);

  return (
    <>
      <Head>
        <title>Create Next App With Redux Toolkit</title>
        <meta name="description" content="Generated by Ahmed Abdelaziz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <h1>{value}</h1>
          <button onClick={()=>{dispatch(increment())}}>+1</button>
          <button onClick={()=>{dispatch(incrementByAmount(5))}}>+5</button>
          <button onClick={()=>{dispatch(decrement())}}>-1</button>
      </main>
    </>
  )
}
