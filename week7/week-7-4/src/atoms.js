import axios from "axios"
import { atom, selector } from "recoil"

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "asyncDataFetchSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      )
      return res.data
    },
  }),
})

export const totalNotificationsSelector = selector({
  key: "totalNotificationsSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications)
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.messaging +
      allNotifications.notifications
    )
  },
})
