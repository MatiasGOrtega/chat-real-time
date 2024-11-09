import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

function useSignup() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  const { setAuthUser } = useAuthContext()

  function handleInputsErrors(inputs) {
    const errors = {}
    let success = true
  
    if (!inputs.fullName) {
      errors.fullName = "Full Name is required"
      success = false
    }

    if (!inputs.username) {
      errors.username = "Username is required"
      success = false
    }
  
    if (!inputs.password) {
      errors.password = "Password is required"
      success = false
    }

    if (inputs.password.length < 6) {
      errors.password = "Password must be at least 6 characters"
      success = false
    }
  
    if (!inputs.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required"
      success = false
    }
  
    if (inputs.password !== inputs.confirmPassword) {
      errors.confirmPassword = "Passwords do not match"
      success = false
    }
  
    setErrors(errors)
    return success
  }

  const signup = async (params) => {
    const success = handleInputsErrors(params)
    if (!success) return

    setLoading(true)
    try {
      const response = await fetch("/api/auth/signup", {
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
      console.log("Error in useSignup", error.message)
    } finally {
      setLoading(false)
    }
  } 

  return { loading, errors, signup }
}

export default useSignup