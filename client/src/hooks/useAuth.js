// import { useState, useEffect } from 'react';

// const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const jwt = localStorage.getItem('jwt');
//     console.log('token', jwt);
//     if (jwt) {
//       setIsAuthenticated(true);
//     }
//     console.log('isAuthenticated', isAuthenticated);
//   }, [isAuthenticated]);

//   return { isAuthenticated, setIsAuthenticated, loading, setLoading };
// };

// export default useAuth;
