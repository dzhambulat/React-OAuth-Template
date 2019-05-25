export const setUser = (user) => {
    return {
        ...user,
        type: 'SET_USER'
    }
}

export const clearUser = () => {
    return {
        type: 'CLEAR_USER'
    }
}

export const login = (logininfo, method) => {
    return (dispatch) => {
        
    }
}