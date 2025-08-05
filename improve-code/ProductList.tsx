import React, { useState, useEffect } from 'react';

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [searchTerm]);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await fetch(`/api/users?search=${searchTerm}`);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  const updateUserStatus = (userId, status) => {
    fetch(`/api/users/${userId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status })
    }).then(() => {
      setUsers(users.map(u =>
          u.id === userId ? { ...u, status } : u
      ));
    });
  };

  return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-6">
          <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Search users..."
              onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold p-4 border-b">Users</h2>
            {loading ? (
                <div className="p-4">Loading...</div>
            ) : (
                <div className="divide-y">
                  {users.map(user => (
                      <div
                          key={user.id}
                          className="p-4 hover:bg-gray-50 cursor-pointer"
                          onClick={() => setSelectedUser(user)}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">{user.name}</h3>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                              user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100'
                          }`}>
                      {user.status}
                    </span>
                        </div>
                      </div>
                  ))}
                </div>
            )}
          </div>

          {selectedUser && (
              <div className="bg-white rounded-lg shadow">
                <h2 className="text-xl font-bold p-4 border-b">User Details</h2>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedUser.email}</p>

                  <div className="space-y-2">
                    <button
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => updateUserStatus(selectedUser.id, 'active')}
                    >
                      Activate User
                    </button>
                    <button
                        className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        onClick={() => updateUserStatus(selectedUser.id, 'inactive')}
                    >
                      Deactivate User
                    </button>
                  </div>
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

export default UserDashboard;