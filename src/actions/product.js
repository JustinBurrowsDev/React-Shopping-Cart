import axios from "axios"

//go get the products
export function getProducts() {
  return new Promise((resolve, reject) => {
    axios
      .get("/products")
      .then(resp => {
        resolve(resp.data)
        console.log(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

//when i click on the product i should see a overview
export function getProductView(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`./product/${id}?_embed=products`)
      .then(resp => {
        resolve(resp.data)
        console.log(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}
