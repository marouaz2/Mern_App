import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('/comments')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des commentaires :', error);
      });
  }, []);

  return (
    <div>
      <h1>Commentaires</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment._id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
