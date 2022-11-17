import { LOGIN_ROUTE, CHAT_ROUTE } from "./Utils/consts"
import Login from "./Pages/Login/Login"
import Chat from './Pages/Chat/Chat'

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Login />
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        element: <Chat />
    }
]