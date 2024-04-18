const getCategories = (data) => [...new Set(data.map((cat) => cat.category))];

export default getCategories;
