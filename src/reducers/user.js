const user = (state = { info:{}}, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
            ...state,
            info : {
                id: action.id,
                name: action.name,
                email: action.email,
            },
            jwt: action.jwt
        }
      case 'CLEAR_USER':
        return {
            info: {},
            signed: false,
            jwt: undefined
        }
      default:
        return state
    }
  }
  
  export default user