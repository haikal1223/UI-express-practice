import axios from 'axios'

export const getListCategory = () =>{
    return (dispatch) => {
        axios.get('http://localhost:1999/category')
        .then((res)=>{
            dispatch({
                type : 'ISI_CATEGORY_LIST',
                payload : res.data
            })
        })
        .catch((err)=>{
            console.log(err);
            
        })
       
    }
}

export const addCategory = (cat) =>{
    return (dispatch) => {
        dispatch({
            type : "Loading_Add"
        })
        axios.post('http://localhost:1999/category', {
            nama : cat
        }).then((res)=>{
            dispatch({
                type : 'ISI_CATEGORY_LIST',
                payload : res.data
            })
            dispatch({
                type: 'Add_Selesai',
                payload: 'Add Berhasil'
            })
        }).catch((err)=>{
            console.log(err);
            dispatch({
                type: 'Add_Selesai',
                payload: 'Add Gagal'
            })
        })

    }
}
export const deleteCategory = (id) =>{
    return (dispatch) =>{
        axios.delete(`http://localhost:1999/category/${id}`)
        .then((res)=>{
            dispatch({
                type : 'ISI_CATEGORY_LIST',
                payload: res.data
    
            })
           dispatch({
               type: 'Add_Selesai',
               payload: 'Delete Berhasil'
           })
            
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export const editCancelCategory = (id) =>{
    return {
        type: 'Edit_Cancel_Category',
        payload: id
    }
}

export const updateCategory = ({nama,id}) =>{
    return (dispatch) => {
        axios.put(`http://localhost:1999/category/${id}`,{
            nama
        }).then((res)=>{
            dispatch({
                type : 'ISI_CATEGORY_LIST',
                payload: res.data
            })
            dispatch({
                type: 'Edit_Cancel_Category',
                payload : 0
            })
        }).catch((err)=>{
            console.log(err);
        })

    }
}