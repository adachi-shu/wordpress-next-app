import Link from 'next/link'
import { Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            SiteName
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">
            About
          </Navbar.Link>
          <Navbar.Link href="/blog">
            Blog
          </Navbar.Link>
          <Navbar.Link href="/contact">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
  )
}
