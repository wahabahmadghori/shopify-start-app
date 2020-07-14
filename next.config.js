require('dotenv').config()

const webpack =require('webpack')
const apikey = JSON.stringify(process.env.SHOPIFY_API_KEY)

module.exports={
    webpack:config=>{
        const env = {API_KEY:apikey}
        config.plugins.push(new webpack.DefinePlugin(env))
        return config
    }
}