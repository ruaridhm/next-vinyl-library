import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import mainLogo from '../../public/Logo.png';

const Nav = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="../../public/Logo.png">
              <h2>Vinyl Library</h2>
              <Image src={mainLogo} alt="Vinyl Library"></Image>             
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav