import { menuItems } from "../data/menuItems";
import UserProfile from "./UserProfile";

export default function Sidebar() {
  return (
    <div className="md:w-64 w-20 bg-white h-[100vh] shadow-lg flex flex-col border-r border-gray-300">
      {/* Logo */}
      <div className="p-4 border-b">
        {/* <img src="/logo.png" alt="Logo" className="sm:hidden h-8 mx-auto md:mx-0" /> */}
        <h3 className="text-2xl text-indigo-900 md:hidden text-center font-bold">S</h3>
        <h3 className="text-white text-center px-1 font-bold text-2xl hidden md:block">
          <span className="bg-indigo-900 rounded-lg border-8 border-gray-400">Shubhada</span>
        </h3>
      </div>

      {/* Navigation */}
      <nav className="flex-grow overflow-y-auto p-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer ${
              item.active
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <item.icon className="mr-0 md:mr-3 mx-auto md:mx-0 text-2xl" />
            <span className="hidden md:inline-block">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="">
        <UserProfile />
      </div>
    </div>
  );
}