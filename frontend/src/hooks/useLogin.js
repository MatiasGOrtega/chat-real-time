import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

function useLogin() {
  const [loading , setLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  const { setAuthUser } = useAuthContext()

  const handleInputsErrors = (inputs) => {
    const errors = {}
    let success = true

    if (!inputs.username) {
      errors.username = "Username is required"
      success = false
    }

    if (!inputs.password) {
      errors.password = "Password is required"
      success = false
    }

    setErrors(errors)

    return success
  }

  const login = async (params) => {
    const success = handleInputsErrors(params)
    if (!success) return

    setLoading(true)
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      })
      const data = await response.json()
      if(data.error){
        throw new Error("An error occurred while logging out");
      }

      localStorage.setItem("chat-user", JSON.stringify(data))
      setAuthUser(data)

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { loading, errors, login }
}

export default useLogin