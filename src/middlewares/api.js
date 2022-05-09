const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    // on traite l'action de type FETCH_RECIPES
    // dispatchée depuis le composant principal
    default:
      next(action);
  }
};

export default apiMiddleWare;
