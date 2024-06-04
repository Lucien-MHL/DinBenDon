import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '@routes/paths'

function ProtectedLayout() {
  const navigate = useNavigate()

  // TODO: To use real key to get user is login or not
  React.useEffect(() => {
    const isLogin = localStorage.getItem('isLogin')
    if (!isLogin) navigate(PATHS.LOGIN)
  }, [navigate])

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

export default ProtectedLayout
