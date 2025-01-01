import { FiMoreVertical } from 'react-icons/fi';

export default function UserProfile() {
  return (
    <div className="flex items-center justify-between p-4 border-t">
      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3 hidden md:block">
          <p className="text-sm font-semibold">John Doe</p>
          <p className="text-xs text-gray-500">Administrator</p>
        </div>
      </div>
      <button className="text-gray-500 hover:text-gray-700 hidden md:block">
        <FiMoreVertical size={20} />
      </button>
    </div>
  );
}