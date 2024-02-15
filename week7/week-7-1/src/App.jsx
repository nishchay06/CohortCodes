import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom } from "./store/atoms/count"

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
    </>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>{count}</div>
}

function Buttons() {
  const [count,setCount] = useRecoilState(countAtom)
  return (
    <>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}

export default App
