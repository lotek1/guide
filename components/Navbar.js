import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {
  const { user, login } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="container">
      <nav>
        <Image src="/logo.png" width={60} height={55} />
        <Link href="/">
          <a> Guidery</a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </li>
          <li onClick={login} className="btn">
            Login/Signup
          </li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/411.png" width={966} height={276} />
      </div>
    </div>
  );
}
