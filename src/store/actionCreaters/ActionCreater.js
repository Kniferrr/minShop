import {ERROR} from "../redusers/Shop";

export const ActionCreater = () => {
    return  (dispatch) => {
        
        try{
            
        }catch(e){
            dispatch(ERROR("Произошла ошибка при старте игры"));
        }
    }
};
