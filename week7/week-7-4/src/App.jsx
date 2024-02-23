import { useRecoilValue, RecoilRoot } from "recoil"
import { notifications, totalNotificationsSelector } from "./atoms"

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
}

function MainApp() {
  const networkCount = useRecoilValue(notifications)
  const totalNotifications = useRecoilValue(totalNotificationsSelector)
  return (
    <>
      <button>Home</button>
      <button>
        My network ({networkCount.network > 99 ? "99+" : networkCount.network})
      </button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Me ({totalNotifications})</button>
    </>
  )
}

export default App
