import { Menu } from '@headlessui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './AuthContext';

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <Menu as="div" className="relative ml-3">
      {user && (
        <>
          <Menu.Button className="flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className="sr-only">Open user menu</span>
            <div className="overflow-hidden rounded-full bg-base-300 w-8 h-8">
              <img src={user.photoURL} alt="User Avatar" className="w-full h-full object-cover" />
            </div>
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-base-100 py-1 shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/user"
                  className={`block px-4 py-2 text-sm ${active ? 'bg-primary text-primary-content' : 'text-base-content'}`}
                >
                  Your Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/settings"
                  className={`block px-4 py-2 text-sm ${active ? 'bg-primary text-primary-content' : 'text-base-content'}`}
                >
                  Settings
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Profile;
