const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Endpoint pour récupérer tous les articles
router.get('/', (req, res) => {
  Post.find()
    .then(posts => {
      res.json(posts);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des articles :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    });
});

// Endpoint pour créer un nouvel article
router.post('/', (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });

  newPost.save()
    .then(post => {
      res.json(post);
    })
    .catch(error => {
      console.error('Erreur lors de la création de l\'article :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    });
});

// Autres endpoints pour les opérations CRUD sur les articles

module.exports = router;
