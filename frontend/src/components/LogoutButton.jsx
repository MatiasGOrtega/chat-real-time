import useLogout from '../hooks/useLogout'
import LogoutIcon from './icons/LogoutIcon'
function LogoutButton() {

  const {loading, logout } = useLogout()

  return (
    <button className='mt-auto' onClick={logout}>
      {!loading ? (
          <LogoutIcon />
        ):(
          <span className='loading loading-spinner'></span>
        )
      }
    </button>
  )
}

export default LogoutButton