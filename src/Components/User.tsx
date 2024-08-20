import { useState } from 'react';

type User = {
  name: string;
};

const User = () => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    const data = await response.json();
    setUser(data);
  };

  const fetchUser1 = () => fetchUser(1);
  const fetchUser2 = () => fetchUser(2);

  return (
    <div>
      <h1 data-testid="user">{user?.name}</h1>
      <div>
        <button data-testid="user-1" onClick={fetchUser1}>
          Fetch user 1
        </button>
        <button data-testid="user-2" onClick={fetchUser2}>
          Fetch user 2
        </button>
      </div>
    </div>
  );
};

export default User;
