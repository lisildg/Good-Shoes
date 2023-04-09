const app=require("./src/app")
const sequelize=require("./src/database")
const port = 3000
const {models}=require("./src/models/Relations")
console.log(models)
sequelize.sync({force:true}).then(()=>{

  app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
})
