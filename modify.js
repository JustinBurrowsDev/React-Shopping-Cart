const json = require('./db.json')
const fs = require('fs')

const p = json.products.map(product => {
  return {
    ...product,
    img: {
      normal: `/assets/${product.sku}_1.jpg`,
      thumb: `/assets/${product.sku}_2.jpg`
    }
  }
})

const newproducts = {products:p}

fs.writeFileSync('./db2.json', JSON.stringify(newproducts)) 
