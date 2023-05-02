import Link from "next/link"

export default function NavBar() {
  return(
    <div>
      <Link href='/'><button>Home</button></Link>
      <Link href='/training'><button>Training</button></Link>
      <Link href='/goals'><button>Goals</button></Link>
      <Link href='/measurements'><button>Measurements</button></Link>
    </div>
  )
}