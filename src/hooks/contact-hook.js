import { useState } from "react"

const useContactForm = callback => {
  const [state, setState] = useState({
    email: "",
    salutation: "",
    first: "",
    last: "",
    phone: "",
    message: "",
    newsletter: true,
    dataprivacy: false,
  })

  const handleChange = event => {
    event.persist()
    setState({ ...state, [event.target.id]: event.target.value })
  }

  const handleCheckbox = event => {
    event.persist()
    setState({ ...state, [event.target.id]: event.target.checked })
  }

  const handleSubmit = event => {
    console.log(state)
    if (event) {
      event.preventDefault()
    }
    callback()
  }
  return {
    state,
    handleChange,
    handleCheckbox,
    handleSubmit,
  }
}

export default useContactForm
