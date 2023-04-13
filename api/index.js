const app=require("./src/app")
const sequelize=require("./src/database")
const port = 3000
const {models}=require("./src/models/Relations")
console.log(Object.values(models))
sequelize.sync({force:true}).
then(()=>{
  app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
})
.catch((err)=>{
  console.log(err.message)
})