export default {
  addComment(feedback) {
    return fetch('/api/userinput/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedback)
    })
      .then(response => {
        return response.json();
      });
  },

  addStarRating(feedback) {
    return fetch('/api/userinput/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedback)
    })
      .then(response => {
        console.log('this is the response', feedback);
        return response.json();
      });
  }
};