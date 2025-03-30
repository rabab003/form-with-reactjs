import LeftSide from "./Components/LeftSide"
import RightSide from "./Components/RightSide"

function App() {

  return (
    <>
    <div className="bg-[#141414] h-screen">

    <div className="text-white md:w-[750px] rounded-3xl h-auto md:justify-center md:items-center md:flex bg-[#0A0A0A]">
      <LeftSide />
      <RightSide/>
    </div>

    </div>
 
      </>
  )
}

export default App

