class StorageService {

  set(item, value) {
    localStorage.setItem(item, JSON.stringify(value))
  }

  get(item, prop) {
    try {
      if (!prop) return JSON.parse(localStorage.getItem(item))
      else {
        var dados = JSON.parse(localStorage.getItem(item))
        if (dados && prop in dados) return dados[prop]
        else return false
      }
    } catch (err) {
      console.log('Erro ao buscar dados', err)
    }
  }

  clear(item, prop) {
    try {
      if (!prop) localStorage.removeItem(item)
      else {
        var dados = JSON.parse(localStorage.getItem(item))
        if (dados && prop in dados) {
          dados[prop] = null
          localStorage.setItem(item, JSON.stringify(dados))
        }
      }
    } catch (err) {
      console.log('Erro ao limpar dados', err)
    }
  }

}

export default new StorageService()