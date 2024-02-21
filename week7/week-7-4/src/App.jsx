import { useRecoilValue, RecoilRoot } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNot } from "./atoms"

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
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  const notificationskNotificationCount = useRecoilValue(notificationsAtom)
  const messagesNotificationCount = useRecoilValue(messagingAtom)
  const totalNotifications = useRecoilValue(totalNot)
  return (
    <>
      <button>Home</button>
      <button>
        My network (
        {networkNotificationCount > 99 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging ({messagesNotificationCount})</button>
      <button>Notifications ({notificationskNotificationCount})</button>
      <button>Me ({totalNotifications})</button>
    </>
  )
}

export default App
