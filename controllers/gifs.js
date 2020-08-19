const db = require('../models')

// db.Gif.create({url: "https://media2.giphy.com/media/3oEhmI2ggePqhmHoE8/100.gif?cid=9e239aa980c19d458da5153d2701ee2d237238e2223f212b&rid=100.gif"
// }, (err, createdGiff)=>{
//   if(err){
//     console.log(err)
//   }else {
//     console.log(createdGiff)
//     createdGiff.save()
//   }
// })

const index = (req, res) => {
  db.Gif.find({}, (err, foundGifs)=>{
    if(err) console.log('error', err)
    console.log(foundGifs)
    if(!foundGifs.length){
      return res.json({message: 'no gifs have been added yet'})
    }
    res.json({ gifs: foundGifs })
  })
}


module.exports = {
  index,
}