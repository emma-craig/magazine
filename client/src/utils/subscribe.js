export const subscribe = async (subscriber) => {
  // API call to sign up for newsletter
  try {
    const response = await fetch('http://localhost:5000/mailinglist', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        'email': subscriber
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
