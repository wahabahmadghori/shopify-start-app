console.log('This is comming from script tag api')

const makeHeader = (data)=>{
    $('#shopify-section-header').prepend(`<div style="background:red;">${data}</div>`)
}
fetch('https://cors-anywhere.herokuapp.com/https://shopifyapp01.herokuapp.com/api/products?shop=mstarterapp.myshopify.com')
.then(res=>res.json()).then(data=>{
    console.log(data.body)
    makeHeader(data.body)
}).catch(error=>{
    console.log(error)
})