import { useEffect, useState } from "react"

function useGetConversations() {
  
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true)
      try {
        const response = await fetch('/api/user')
        const data = await response.json()

        if(data.error){
          throw new Error("An error occurred while fetching conversations");
        }

        setConversations(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getConversations()
  }, [])

  return { loading, conversations }
}

export default useGetConversations