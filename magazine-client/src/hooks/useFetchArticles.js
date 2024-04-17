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
          await fetch('https://the-magazine.vercel.app//articles');
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
