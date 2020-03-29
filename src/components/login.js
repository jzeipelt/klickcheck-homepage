import React, { useContext } from "react"
import { Button } from "@material-ui/core"
import { store } from "../hooks/store"

const Login = () => {
  const state = useContext(store)
  const { dispatch } = state
  const toggleLoginStatus = () => dispatch({type: 'toggleLoginStatus'})

  return (
  <Button variant="contained" color="secondary" onClick={toggleLoginStatus}>
    {state.loginStatus?'Abmelden':'Anmelden'}
  </Button>
  )
}

export default Login
