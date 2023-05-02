import NavBar from "../navbar/navbar"
import Link from "next/link"
export default function Header() {
  return(
    <div>
      <h1>Path To Progress</h1>
      <NavBar />
      {/* <Link href='/'><button>Home</button></Link> */}
    </div>
  )
}
