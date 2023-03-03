const mongoose=require('mongoose');
const Product=require('./models/product')

const dummy_prod=[{
    name:'Iphone',
    price:100,
    desc:"Iphone"
},{
    name:'Macbook',
    price:200,
    desc:"Macbook"
},{
    name:'Apple Watch',
    price:150,
    desc:"Apple Watch"
},{
    name:'Nike Shoes',
    price:80,
    desc:"Shoes"
}]

async function seedDB(){
    await Product.deleteMany();
    await Product.insertMany(dummy_prod);
    console.log("seeded DB");
}

module.exports=seedDB;