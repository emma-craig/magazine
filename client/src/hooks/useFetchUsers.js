import { useState, useEffect } from 'react';

const useFetchUsers = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const domain =
    process.env.NODE_ENV === 'production'
      ? 'https://monthly-elicia-pepper-magazine.koyeb.app'
      : 'http://localhost:5000';

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${domain}/users`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const user = await response.json();
        setUser(user);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [domain]);
  return { user, loading, error };
};

export default useFetchUsers;
