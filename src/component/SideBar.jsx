import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r px-4 py-6">
      <nav className="space-y-2">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:bg-sky-100 translate-x-1 transition-transform duration-200"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/performance"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:bg-sky-100"
            }`
          }
        >
          Performance
        </NavLink>

        <NavLink
          to="/health"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:bg-sky-100"
            }`
          }
        >
          Health
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:bg-sky-100"
            }`
          }
        >
          Events
        </NavLink>

      </nav>
    </aside>
  );
}

