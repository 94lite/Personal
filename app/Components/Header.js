import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link href="/">Lite KIM</Link>
        <Link href="/TechStack">TechStack</Link>
      </div>
      <div className="header-right">
        <Link href="/Connect">Connect</Link>
      </div>
    </div>
  )
};

export default Header;