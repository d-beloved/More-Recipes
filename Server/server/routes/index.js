import usersController from '../controllers/users';

export default (app) => {
  //gets the welcome message
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the More-Recipes API! The Haven where the CHEFF in you is Activated',
  }));

  app.post('/api/v1/users/signup', usersController.create);
  app.post('api/v1/users/signin', usersController.login);
  app.post('api/v1/recipes', recipeController.create);
  app.put('api/v1/recipes/recipeId', recipeController.recipeId);
  app.delete('api/v1/recipes/recipeId', recipeController.recipeId);
  app.get('api/v1/recipes/', recipeController.all);
  app.get('api/v1/recipes/recipeId', recipeController.recipeId);
  app.get('api/v1/users/userId/recipes', favoriteController);
  app.post('api/v1/recipes/recipeId/reviews', reviewController);
  app.get('api/v1/recipes/sorted', votesController);
};