import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'

import { CHAT_ROUTE, LOGIN_ROUTE } from '../Utils/consts'
import { privateRoutes, publicRoutes } from '../routes'

export default function AppRouter() {
    const auth = getAuth()
    const [user] = useAuthState(auth)

    return user ?
        (
            <Routes>
                {privateRoutes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element}/>
                )}
                <Route path='*' element={<Navigate to={CHAT_ROUTE} replace />} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element}/>
                )}
                <Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
            </Routes>
        )
}
