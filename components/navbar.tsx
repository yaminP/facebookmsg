import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import About from '../src/pages/about';

const Navbar = () => {

  return (
   
      <nav className='bg-black flex justify-around items-center'>
        <div className="flex items-center gap-4">
         <Image src="/asset/img/logo.jpg" alt=""  width={130} height={130}/>
         <h1 className="font-extrabold font-mono text-3xl bg-clip-text bg-gradient-to-r from-pink-900 via-cyan-600 to-teal-500 text-transparent">Me Service</h1>
        </div>
        <ul className="flex gap-6 text-white">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href=''>Service</Link>
            <Link href=''>Product</Link>
            <Link href=''>Contact</Link>
        </ul>
      </nav>
    
  );
};

export default Navbar;