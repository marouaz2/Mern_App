const React = require('react');
const { useState, useEffect } = require('react');
const axios = require('axios');

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des catégories :', error);
      });
  }, []);

  return (
    <div>
      <h1>Catégories</h1>
      <ul>
        {categories.map(category => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
