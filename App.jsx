import React, { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');
  const [registerData, setRegisterData] = useState({ name: '', email: '' });

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${registerData.name}! (Data not stored)`);
    setRegisterData({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center space-x-6">
        <div className="flex items-center space-x-6">
          <div className="text-2xl font-bold">Bidzilla</div>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Menu</a>
          <a href="#" className="hover:underline">About</a>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          className="p-2 rounded-lg text-black"
        />
      </nav>

      <div className="flex justify-center mt-10">
        <form onSubmit={handleRegisterSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Live User Register</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerData.name}
            onChange={handleRegisterChange}
            className="block w-full p-2 mb-4 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerData.email}
            onChange={handleRegisterChange}
            className="block w-full p-2 mb-4 border rounded-lg"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
