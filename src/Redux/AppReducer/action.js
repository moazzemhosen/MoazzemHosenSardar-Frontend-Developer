import axios from "axios";
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "./actionType"

export const getData = (getPatientparams) => (dispatch) => {
  
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://api.spacexdata.com/v3/capsules", getPatientparams)
    .then((r) => dispatch({ type: GET_DATA_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: GET_DATA_FAILURE }));
};
    
