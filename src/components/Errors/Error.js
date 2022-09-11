import { Fragment } from "react";
import classes from "./Error.module.css";
const Error = (props) =>{
     return (
        <Fragment >
            <div className={classes["parent-container"]}>
                <span className={classes.close}>+</span>
                <div className={classes["container"]}>
                    <p>Errror! Please Fill the title and description</p>
                </div>
            </div>
        </Fragment>
     );   
};

export default Error;