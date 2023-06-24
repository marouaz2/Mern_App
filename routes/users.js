const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Endpoint pour récupérer tous les utilisateurs
router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    });
});

// Endpoint pour créer un nouvel utilisateur
router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  newUser.save()
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    });
});

// Autres endpoints pour les opérations CRUD sur les utilisateurs

module.exports = router;
