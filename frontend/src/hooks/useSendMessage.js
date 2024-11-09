import { useState } from 'react'
import useConversation from '../store/useConversation'

function useSendMessage() {

  const [ loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation()

  const sendMessage = async (message) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      })

      const data = await response.json()

      if(data.error){
        throw new Error("An error occurred while sending message");
      }

      setMessages([...messages, data])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { loading, sendMessage }
}

export default useSendMessage
