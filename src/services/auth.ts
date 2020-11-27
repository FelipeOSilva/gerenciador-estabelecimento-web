export const isAuthenticated = () => sessionStorage.getItem('jwt_token') !== null
