export const initialData = {
    list: [],
    error: null,
};
export const dataReducer = (state, action) => {
    // if (action.type === 'DELETE_DATA') {
    //     return { ...state, list: [], error: true };
    // }
    if (action.type === 'SET_LIST') {
        return { ...state, list: action.list, error: null };
    }
    throw new Error();
};