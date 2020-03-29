import React, {createContext, useReducer} from 'react'

const initialState = {loginStatus: true}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'toggleLoginStatus':
        const newState = {loginStatus: !state.loginStatus}
        return newState
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}{console.log(state)}</Provider>
}

export { store, StateProvider }