const authReducer = (state = { data: null }, action) => {
    console.log(action)
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile', JSON.stringify({ ...action?.payload }))
            return { ...state, data: action?.payload }
        
        default:
            return state;
    }
}

export default authReducer