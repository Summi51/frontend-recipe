
const mongoose=require('mongoose')

const FavouritesSchema=mongoose.Schema({
    image:{type:String},
    imageType:{type:String},
    title:{type:String},
    userEmail:{type:String}
})

const FavouritesModel=mongoose.model('favourite',FavouritesSchema)

module.exports={
    FavouritesModel
}