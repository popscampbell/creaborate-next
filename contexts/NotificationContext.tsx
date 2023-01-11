import React, { createContext } from "react"
import { UserNotification } from "src/models"

const notifications: UserNotification[] = []

export const NotificationContext = createContext(notifications)