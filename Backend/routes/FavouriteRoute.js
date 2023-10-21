
const express = require('express')
const { FavouritesModel } = require('../model/FavouriteModel')

const FavouriteRouter = express.Router()

// For Add
FavouriteRouter.post('/add', async (req, res) => {
try {
    let newDish=new FavouritesModel(req.body)
    await newDish.save()
    res.send('dish Added successfully')
} catch (error) {
    res.send(error.message)
}
})

//  For Delete
    FavouriteRouter.delete("/delete/:recipeId", async (req, res) => {
        const { recipeId } = req.params;
        try {
          await FavouritesModel.findByIdAndDelete({ _id: recipeId });
          res.status(200).send({ msg: `The recipe with id:${recipeId} has been deleted` });
        } catch (err) {
          res.status(400).send({ err: err.message });
        }
      });




module.exports={
    FavouriteRouter
}