import Button from "../Button"
import Input from "../Input"
import { useForm } from "../../custom-hook"

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
        pattern: {
          value:
            "^((?=.*[d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^wds])|(?=.*[d])(?=.*[A-Z])(?=.*[^wds])|(?=.*[d])(?=.*[a-z])(?=.*[^wds])).{6,30}$",
          message:
            "Password most contain 1 number, 1 special character and 1 letter with at least 6 characteres",
        },
      },
    },
    onSubmit: () => success(true),
  }

  const { handleSubmit, handleChange, errors } = useForm(validationOptions)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Email address"
          placeholder="smith@smithandco.com"
          name="email"
          errorMessage={errors?.email}
          changeHandle={handleChange("email")}
          error={errors?.email}
        />
        <Input
          type="password"
          label="Create password"
          placeholder="6 caracteres or more"
          name="password"
          changeHandle={handleChange("password")}
          errorMessage={errors?.password}
          error={errors?.password}
        />
        <Button label="Primary" primary fullWidth />
      </form>
    </div>
  )
}
export default Form
