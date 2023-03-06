import Button from "../Button"
import Input from "../Input"
import { useForm } from "../../custom-hook"
import { useState } from "react"

const Form = ({ success }) => {
  const validationOptions = {
    validations: {
      email: {
        required: {
          value: true,
          message: "Can not be empty",
        },
        pattern: {
          value:
            "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
          message: "Invalid Email",
        },
      },
      password: {
        required: {
          value: true,
          message: "Can not be empty",
        },
        custom: {
          isValid: (value) => {
            return value && value.length > 5
          },
          message: "Password must contain at least 6 characteres",
        },
      },
    },
    onSubmit: () => success(true),
  }

  const { handleSubmit, handleChange, errors } = useForm(validationOptions)

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleInputPass = (e) => {
    console.log(e)
    setPass(e.target ? e.target.value : "")
    handleChange("password", e)
  }

  const handleInputEmail = (e) => {
    setEmail(e.target ? e.target.value : "")
    handleChange("email", e)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Email address"
          placeholder="smith@smithandco.com"
          name="email"
          errorMessage={errors?.email}
          changeHandle={(e) => handleInputEmail(e)}
          value={email}
          error={errors?.email}
        />
        <Input
          type="password"
          label="Password"
          placeholder="6 caracteres or more"
          name="password"
          changeHandle={(e) => handleInputPass(e)}
          value={pass}
          errorMessage={errors?.password}
          error={errors?.password}
        />
        <Button
          label="Sign In"
          primary
          fullWidth
          disabled={
            errors?.email ||
            errors?.password ||
            email.length < 3 ||
            pass.length < 6
          }
        />
      </form>
    </div>
  )
}
export default Form
