import Api from "./Api";



    export const index = (page) => {
        return Api.get(`product`, {
            params: {
                page
            }
        })
    }