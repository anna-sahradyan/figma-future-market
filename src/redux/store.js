import {combineReducers} from "redux";
import gbpRate from './currencySlice';

const rootReducer = combineReducers({
    gbpRate,
    devTools: true
});
export default rootReducer;