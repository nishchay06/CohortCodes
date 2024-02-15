import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, evenSelector } from "./store/atoms/count"

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}

function Count() {
  return (
    <>
      <CountRenderer />
      <Buttons />
      <EvenCountRenderer/>
    </>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>{count}</div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  return (
    <>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
    </>
  )
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector)
  return <div>{!isEven ? "It is even." : null}</div>
}

export default App
