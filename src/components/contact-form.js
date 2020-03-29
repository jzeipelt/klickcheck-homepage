import React from "react"
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@material-ui/core"

import useContactForm from "../hooks/contact-hook"

const ContactForm = () => {
  const submit = () => {
    alert(`User Created!
           Name: ${state.first} ${state.last}
           Email: ${state.email}`)
  }

  const { state, handleChange, handleCheckbox, handleSubmit } = useContactForm(
    submit
  )

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justify="space-between" lg={6}>
        <Grid item xs={6} md={3}>
          <TextField
            fullWidth
            id="first"
            type="text"
            label="Vorname"
            defaultValue={state.first}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            fullWidth
            id="last"
            type="text"
            label="Nachname"
            defaultValue={state.last}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            required
            id="email"
            type="email"
            label="E-Mail"
            defaultValue={state.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            id="phone"
            type="tel"
            label="Telefon"
            defaultValue={state.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            id="message"
            type="text"
            label="Ihre Nachricht an uns"
            defaultValue={state.message}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.dataprivacy}
                id="dataprivacy"
                onChange={handleCheckbox}
                value={state.dataprivacy}
              />
            }
            label="Ich habe die Datenschutzerklärung zur Kenntnis genommen und akzeptiert."
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.newsletter}
                id="newsletter"
                onChange={handleCheckbox}
                value={state.newsletter}
              />
            }
            label="Newsletter bestellen"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" type="submit">
            Nachricht senden
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default ContactForm
