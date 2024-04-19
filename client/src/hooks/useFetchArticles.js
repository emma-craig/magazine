import { useEffect, useState } from 'react';
const useFetchArticles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const domain =
    process.env.NODE_ENV === 'production' ? 'https://monthly-elicia-pepper-magazine.koyeb.app' : 'http://localhost:5000';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(domain);
      try {
        const response = await fetch(`${domain}/articles`, {
          // await fetch('http://localhost:5000/articles', {

          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log('data', data);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [domain]);
  return { data, loading, error };
};

export default useFetchArticles;
