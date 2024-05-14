import { useRouter } from 'next/navigation'

const Logout = () => {
  const router = useRouter()

  const handleLogout = () => {
    sessionStorage.clear()
    localStorage.clear()
    router.push('/login')
  }

  return (
    <button onClick={handleLogout} className="underline">
      Logout
    </button>
  )
}

export default Logout
