import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/ninjas/" legacyBehavior>
        <a>Listings</a>
      </Link>
    </nav>
  );
};

export default Navbar;
