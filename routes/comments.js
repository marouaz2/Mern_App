const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Endpoint pour récupérer tous les commentaires
router.get('/', (req, res) => {
  Comment.find()
    .then(comments => {
      res.json(comments);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des commentaires :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    });
});

// Endpoint pour créer un nouveau commentaire
router.post('/', (req, res) => {
  const { content } = req.body;
  const newComment = new Comment({ content });

  newComment.save()
    .then(comment => {
      res.json(comment);
    })
    .catch(error => {
      console.error('Erreur lors de la création du commentaire :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    });
});

// Autres endpoints pour les opérations CRUD sur les commentaires

module.exports = router;
