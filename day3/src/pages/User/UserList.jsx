import React, { useEffect, useState, useMemo } from "react";

const UserList = () => {
  // 🔹 State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  // 🔹 Fetch Users (Mock API)
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulating API delay
      await new Promise((res) => setTimeout(res, 800));

      const data = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: i % 2 === 0 ? "Admin" : "User",
        status: i % 3 === 0 ? "Inactive" : "Active",
      }));

      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔹 Filtered Users (Search)
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // 🔹 Pagination Logic
  const totalPages = Math.ceil(filteredUsers.length / limit);

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * limit;
    return filteredUsers.slice(start, start + limit);
  }, [filteredUsers, page, limit]);

  // 🔹 Render
  return (
    <div style={{ padding: "20px" }}>
      <h2>User Management</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        style={{ padding: "8px", marginBottom: "10px", width: "250px" }}
      />

      {/* 🔄 States */}
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 📊 Table */}
      {!loading && !error && (
        <>
          <table border="1" cellPadding="10" width="100%">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td
                      style={{
                        color: user.status === "Active" ? "green" : "red",
                      }}
                    >
                      {user.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No users found</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* 📄 Pagination */}
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 1}
            >
              Prev
            </button>

            <span style={{ margin: "0 10px" }}>
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;