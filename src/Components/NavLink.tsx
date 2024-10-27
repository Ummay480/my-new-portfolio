import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string; // Optional for additional styling
  onClick?: () => void; // Optional for handling click events
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, className, onClick }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white ${className}`}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default NavLink;
