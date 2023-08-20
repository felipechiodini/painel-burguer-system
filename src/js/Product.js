import Api from "./Api";

class Product {

  index(page) {
    return Api.get(`products`, {
      params: {
        page
      }
    })
  }
  
  store(data) {
    return Api.post(`products`, data)
  }

}


export default Product