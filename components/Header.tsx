
import Link from "next/link"


const Header = () => {
  return (
 
        <ul >
      <li><Link href="#">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact-us">Contact</Link></li>
    </ul>
    
  )
}

export default Header