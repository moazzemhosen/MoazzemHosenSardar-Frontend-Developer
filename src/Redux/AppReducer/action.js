import axios from "axios";
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "./actionType"

export const getData = (getPatientparams) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://json-server-heroku-production-8ef0.up.railway.app/jobs", getPatientparams)
    .then((r) => dispatch({ type: GET_DATA_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: GET_DATA_FAILURE }));
};
    
export const PostData=(form)=>(dispatch)=> {
  axios.post("https://json-server-heroku-production-8ef0.up.railway.app/jobs",{...form})
}