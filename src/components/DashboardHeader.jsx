import { FaBell } from 'react-icons/fa';

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-end sm:justify-between mb-6 bg-white px-4 py-3 shadow-sm">
      {/* Left side */}
      <div className='hidden sm:block'> 
        <h1 className="text-2xl font-bold text-indigo-900">Welcome to Shubhada Polymers</h1>
      </div>
      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Bell icon */}
        <FaBell className="text-xl text-blue-500 cursor-pointer" />
        {/* Profile image */}
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-blue-500"
        />
      </div>
    </div>
  );
}
