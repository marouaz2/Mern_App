const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Endpoint pour récupérer toutes les catégories
router.get('/', (req, res) => {
  Category.find()
    .then(categories => {
      res.json(categories);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des catégories :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    });
});

// Endpoint pour créer une nouvelle catégorie
router.post('/', (req, res) => {
  const { name } = req.body;
  const newCategory = new Category({ name });

  newCategory.save()
    .then(category => {
      res.json(category);
    })
    .catch(error => {
      console.error('Erreur lors de la création de la catégorie :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    });
});

// Autres endpoints pour les opérations CRUD sur les catégories

module.exports = router;
