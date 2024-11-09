import SideBar from '../components/SideBar'
import MessageContainer from '../components/MessageContainer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-950'>
      <SideBar />
      <MessageContainer />
    </div>
  )
}

export default Home