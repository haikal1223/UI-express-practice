const INITIAL_STATE = { loadingAdd: false,statusAdd: '', selectedEditId: 0 }

export default(state = INITIAL_STATE,action) =>{
    switch(action.type){
        case 'Loading_Add' :
            return {...state, loadingAdd:true}
        case 'Add_Selesai' :
            return {
                ...state,
                loadingAdd:false,
                statusAdd: action.payload
            }
            case 'Edit_Cancel_Category' :
                return {
                    ...state,
                    selectedEditId: action.payload
                }
        default :
            return state
    }
}