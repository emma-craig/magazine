
//USER AND AUTH ROUTES

//SIGNIN
export const login = async (user) => {
  // API call to sign in a user
  try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        return error;
    }
};

//SIGNUP
export const signup = async (user) => {
  // API call to sign up a user
  try {
        const response = await fetch('http://localhost:5000/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

//SETTING THE JWT TOKEN IN USER'S BROWSER
export const authenticate = (data, next) => {
  // Storing JWT token in user's browser
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

//SIGNOUT -> REMOVING JWT TOKEN
export const logout = (next) => {
  // Removing JWT token upon logout
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    fetch('http://localhost:5000/logout', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      next();
    })
    .catch(error => console.log(error));
  }
};


//VALIDATION IF USER IS SIGNED IN
export const isAuthenticated = () => {
  // Checking if the user is authenticated
  if (typeof window === 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt'))
    return JSON.parse(localStorage.getItem('jwt'));
  else return false;
};
