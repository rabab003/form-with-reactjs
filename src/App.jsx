import LeftSide from "./Components/LeftSide"
import RightSide from "./Components/RightSide"

function App() {
  return (
    <div className="bg-[#141414] h-screen flex justify-center items-center">
      <div className="flex w-full max-w-4xl rounded-3xl overflow-hidden bg-[#0A0A0A]">
        <LeftSide />
        <RightSide/>
      </div>
    </div>
  )
}
export default App

