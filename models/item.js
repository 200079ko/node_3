exports.values =[
    {id:1,name:'Milk Tea',price: 150},
    {id:2,name:'Coffee',price: 170},
    {id:3,name:'Green Tea',price:200},
]
exports.find = (id) => {
   return this.values.find((value) => value.id == id)
       
}