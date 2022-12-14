import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { errorActions } from "../store/error";
import classes from "./Item.module.css";

export const InputForm = (props) => {
    const [isDisplay,setIsDisplay] = useState(false);
    const titleInputRef = useRef(null);
    const descTextRef = useRef(null);
    const dispatch  = useDispatch();
    function clickModalHandeler(){
        setIsDisplay((prevState)=>!prevState);
        dispatch(errorActions.hideMessage());
        dispatch(errorActions.setErrorMsg(""));
    }
    function sendTaskHandeler(){
        let item = {
            title:titleInputRef.current.value,
            desc:descTextRef.current.value,
        };
        props.addItem(item);
        setIsDisplay((prevState)=>!prevState);
    }
    /* The Modal JSX could go into a saperate component and it will make the code cleaner */
    let Modal =   <div  className={classes.modal}>
                    <div className={classes.form}>
                        <div className={classes.container}>
                            <div>
                                <input ref={titleInputRef} placeholder="Please enter the task title"/>
                            </div>
                            <div>
                                <textarea ref={descTextRef} placeholder="Enter the detailed information"/>
                            </div>
                            <div className={ classes.button +" "+ classes.add} onClick={sendTaskHandeler}>Add</div>
                            <div className={classes.button +" "+ classes.cancel} onClick={clickModalHandeler}>Cancel</div>
                        </div>
                    </div>
                </div>;

    return (
        <Fragment>
            <div className={classes.button+" "+classes.addTask} onClick={clickModalHandeler}>+Add task</div>
            {isDisplay && Modal}
        </Fragment>
    )
};
const Item = (props) => {
    
    let itemElement = <li>
                        <span title="Click to see details" onClick={props.itemDetails}>{props.title}</span>
                        <span onClick={props.deleteItem}>
                            <span title="Remove the task" className={classes.cross}>+</span>
                        </span>
                    </li>;
    return (
        <Fragment>
            {itemElement}
            
        </Fragment>
    );
};
export default Item;