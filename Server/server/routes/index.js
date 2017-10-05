import userController from '../controllers/users';
import recipeController from '../controllers/recipes';
import reviewController from '../controllers/reviews';
import favoriteController from '../controllers/favorite';
import votesController from '../controllers/votes';

export default (app) => {
  //gets the welcome message
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the More-Recipes API! The Haven where the CHEFF in you gets Activated'
  }));
  /* routes for the user sign up
  *** and user sign in
  */
  app.post('/api/v1/users/signup', userController.create);
  app.post('api/v1/users/signin', userController.login);

  /* the recipes routes
  ** for the creation, modification
  ** delete and getting all or one recipe
  */
  app.post('api/v1/recipes', recipeController.create);
  app.put('api/v1/recipes/recipesId', recipeController.recipesId);
  app.delete('api/v1/recipes/recipesId', recipeController.recipesId);
  app.get('api/v1/recipes/', recipeController.getAll);
  app.get('api/v1/recipes/recipesId', recipeController.recipesId);

  /* route for getting an 
  *******   authenticated user's favorite recipe
  ********/
  app.get('api/v1/users/userId/recipes', favoriteController);

  /* route that allos authenticated users to post
  ===== a review for a recipe
  */
  app.post('api/v1/recipes/recipesId/reviews', reviewController);

  /* route that allows a user get the recipes
  **** with the most Upvotes
  */
  app.get('api/v1/recipes/sort', votesController); 
};
