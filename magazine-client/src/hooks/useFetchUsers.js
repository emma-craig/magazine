import { useState, useEffect } from 'react';

const useFetchUsers = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response =
          await fetch('https://the-magazine-back-end.vercel.app/users', {
            mode: 'no-cors',

            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              mode: 'no-cors',
              credentials: 'true',
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
  }, []);
  return { user, loading, error };
};

export default useFetchUsers;
