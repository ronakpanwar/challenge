const { data } = require("../data")

const getData = (req,res)=>{
  try {

    return res.status(200).json({
        data ,
        success:true
  })
    
  } catch (error) {
    return res.json(
      console.log(error)   
    )
  }
}

const checkOut = (req,res)=>{
try {
    const {orderItems} = req.body ;
    if(!orderItems ){
        return res.json({
            success:false,
            message:"Somthing wrong..."
        })
    }
    console.log(orderItems);
    return res.json({
        success:true,
    })

} catch (error) {
    res.json(
        console.log(error)
    )
}
}


module.exports = {getData , checkOut}