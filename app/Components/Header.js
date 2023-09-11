import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <Link href="/">Lite KIM</Link>
      <Link href="/Connect">Connect</Link>
    </div>
  )
};

export default Header;