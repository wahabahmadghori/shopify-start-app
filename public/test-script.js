console.log('This is comming from script tag api')
$('.site-header').prepend('<div style="background:red;">Free Shipping</div>')

console.log("Hello")
fetch('https://cors-anywhere.herokuapp.com/https://shopifyapp01.herokuapp.com/api/products?shop=mstarterapp.myshopify.com')
.then(res=>res.json()).then(data=>{
    console.log(data.data)
}).catch(error=>{
    console.log(error)
})