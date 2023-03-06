import Form from "./Form"
import Text from "./Text"
import ContentWrapper from "./ContentWrapper"

import { useState } from "react"

const App = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSuccess = (value) => {
    setSubmitted(value)
  }
  return (
    <ContentWrapper>
      <Text variant="h1" align="center" style={{ padding: "0 10%" }}>
        Sign in
      </Text>
      <Form success={handleSuccess} />
    </ContentWrapper>
  )
}

export default App
