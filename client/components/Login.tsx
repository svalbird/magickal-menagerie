import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { loginWithRedirect } = useAuth0()

  function handleSignIn() {
    loginWithRedirect()
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={handleSignIn}>login</button>
    </>
  )
}

export default Login
