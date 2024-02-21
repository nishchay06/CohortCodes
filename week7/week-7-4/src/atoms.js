import { atom, selector } from "recoil"

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
})

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
})

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
})

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
})

export const totalNot = selector({
  key: "totalNotifications",
  get: ({ get }) => {
    const netAtom = get(networkAtom)
    const jobAtom = get(jobsAtom)
    const notAtom = get(notificationsAtom)
    const mesAtom = get(messagingAtom)
    return netAtom + notAtom + mesAtom + jobAtom
  },
})
