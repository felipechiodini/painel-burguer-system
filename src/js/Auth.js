import Storage from "./Storage"

export const isAuthenticate = () => {
    return Storage.get('token') !== null
}