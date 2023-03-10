export const GithubReducer = (state,action)=>{
    switch(action.type)
    {
        case 'get_users':
            return {
                ...state,
                users:action.payload,
                loading:false
            };

        case 'get_user_and_repos':
            return {
                ...state,
                user:action.payload.user,
                repos:action.payload.repos,
                loading:false
            };

        case 'clear_users':
            return {
                ...state,
                users:[]
            }

        default:
            return state;
    }
}