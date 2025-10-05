import { NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

function Navigation() {
  const { user } = useAuth();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact us" },
    { path: "/cart", label: "View Cart" },
    ...(user?.role === "admin"
      ? [{ path: "/order-tracking", label: "Order Tracking" }]
      : []),
  ];

  return (
    <nav className=" shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-white transition-all duration-200 ${
                      isActive
                        ? "underline underline-offset-4"
                        : "hover:underline underline-offset-4"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
