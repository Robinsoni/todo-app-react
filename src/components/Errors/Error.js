import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../store/error";
import classes from "./Error.module.css";
const Error = (props) =>{
   const errorMsg =  useSelector(state =>  state.error.msg );
   const showError =  useSelector(state =>  state.error.showMessage );
   const dispatch = useDispatch();
   function hideErrorMsgHandeler(){
        dispatch(errorActions.hideMessage());
        dispatch(errorActions.setErrorMsg(""));
   }
   var animationClass = "";
    if(showError){
        animationClass = classes["animation"];
    }
    return (
    <Fragment >
        <div className={classes["parent-container"] + " " + animationClass}>
            <span onClick = {hideErrorMsgHandeler} className={classes.close}>+</span>
            <div className={classes["container"]}>
                <p>{errorMsg}</p>
            </div>
        </div>
    </Fragment>
    );   
};

export default Error;