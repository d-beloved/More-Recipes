import express from 'express';
const router = express.Router();

global.recipes = [
    {
        id:1,
        name: 'Amala',
        ingredients: 'Cassava, Plantain',
        reviews: 'It is a wonderful recipe you have here',
        upvotes: 10
    },

    {
        id:2,
        name: 'Coconut Milk',
        ingredients: 'Coconut, Milk shakes, water',
        reviews: 'Are you sure this your recipe won\'t turn belly',
        upvotes: 2
    },

    {
        id:3,
        name: 'Indomie noodles',
        ingredients: 'Flour, Chilli, Seasoning',
        reviews: 'It is a wonderful recipe you have here',
        upvotes: 5
    }
];

//routing setup
//get all the recipes in the app
router.get('/', (req, res) => res.json({
    recipes: global.recipes,
    error: false
}));

//Add a recipe to the app
router.post('/', (req, res) => {
    if(!req.body.name){
        return res.json({
            message: "Recipe name is missing, please enter the name of your recipe",
            error: true
        });
    }
    global.recipes.push(req.body);
    return res.json({
        message: "Your recipe was entered successfully",
        error: false
    });
});


//edit a recipe in the app
router.put('/:recipesid', (req, res) => {
    for(let i=0; i < global.recipes.length; i++){
        if(global.recipes[i].id === parseInt(req.params.recipesid, 10)){
            global.recipes[i].name = req.body.name;
            global.recipes[i].ingredients = req.body.ingredients;
            global.recipes[i].reviews = req.body.reviews;
            global.recipes[i].upvotes = req.body.upvotes;
            return res.json({
                message: "You have successfully edited this recipe",
                error: false
            });
        }
    }
    return res.status(404).json({
        message: "Recipe not found",
        error: true
    });
});


//delete a recipe entry from the app
router.delete('/:recipesid', (req, res) => {
    for(let i=0; i < global.recipes.length; i++){
        if(global.recipes[i].id === parseInt(req.params.recipesid, 10)){
            global.recipes.splice(i,1);
            return res.json({
                message: "You have deleted this recipe successfully",
                error: false
            });
        }
    }
    return res.status(404).json({
        message: "Recipe not found",
        error: true
    });
});


//Add a review for a particular recipe
router.post('/:recipesid/reviews', (req, res) => {
    for(let i=0; i < global.recipes.length; i++){
        if(global.recipes[i].id === parseInt(req.params.recipesid, 10)){
            global.recipes[i].reviews = req.body.reviews;
            return res.json({
                message: "Your review was posted successfully",
                error: false
            });
        }
    }
    return res.status(404).json({
        message: "Recipe not found",
        error: true
    });
});


//Get all the recipes arranged in the order of their upvotes
let sorted = [];
router.get('/:sorted', (req, res) => {
    sorted = global.recipes.sort((a, b) => b.upvotes - a.upvotes);
                     return res.json({
                     recipes: sorted,
                     error: false
        });
    });

export default router;