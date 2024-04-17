import { useEffect, useState } from 'react';
const useFetchArticles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response =
          // (await fetch('http://localhost:5000/articles')) ;
          await fetch('https://the-magazine-back-end.vercel.app/articles', {
            mode: 'no-cors',

            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              mode: 'no-cors',
              credentials: 'true',
            },
          });
        console.log(process.env.NODE_ENV_URL);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, loading, error };
};

export default useFetchArticles;
