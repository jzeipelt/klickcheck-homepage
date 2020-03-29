import React from "react"
import Layout from "../components/layout"
import Testimonials from "../components/testimonials"
import ContactForm from "../components/contact-form"

export default function IndexPage() {
  return (
    <Layout title="Startseite">
      <Testimonials />
      <ContactForm />
    </Layout>
  )
}
