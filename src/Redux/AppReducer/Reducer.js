import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "./actionType"

const intialState={
 
    DATA:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=intialState,{type,payload})=>{
    switch (type) {
        case GET_DATA_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_DATA_SUCCESS:{
            return {
                ...state,
                DATA:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_DATA_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default:
            return {...state}
    }
}