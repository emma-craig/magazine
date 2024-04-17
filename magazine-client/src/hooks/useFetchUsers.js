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
          // (await fetch('http://localhost:5000/users')) ;
          await fetch('https://the-magazine-back-hl8u3zu25-emmas-projects-a7ccc856.vercel.app/users');

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
