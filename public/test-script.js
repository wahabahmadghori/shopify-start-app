console.log('This is comming from script tag api')
$('.site-header').prepend('<div style="background:red;">Free Shipping</div>')

fetch('https://shopifyapp01.herokuapp.com/api/products?shop=mstarterapp.myshopify.com')
.then(data=>console.log(data.data)).catch(error=>console.log(error))