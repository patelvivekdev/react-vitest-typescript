import { useState, useEffect } from 'react';

type User = {
  name: string;
};

const User = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/users/1');
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      User
      {user ? `: ${user?.name}` : ' loading...'}
    </div>
  );
};

export default User;
