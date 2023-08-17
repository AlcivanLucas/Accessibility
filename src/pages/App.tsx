// import { Habit } from "./components/Habit";
import "../styles/global.css";
import '../lib/dayjs'
import { Header } from "../components/Header";

import Maps  from "../components/Maps"


//<div className="w-full max-w-5xl px-6 flex flex-col gap-16">
export function App() {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full h-full px-6 ">
        <Header />
        <Maps />
      </div>
      

    </div>

  )
}

