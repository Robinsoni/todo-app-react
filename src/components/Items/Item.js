import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./Item.module.css";
export const InputForm = (props) => {
    const [isDisplay,setIsDisplay] = useState(false);
    const modalRef = useRef(null);
    const titleInputRef = useRef(null);
    const titleTextRef = useRef(null);


   
    console.log("Check Modal Ref", modalRef);
    function clickModalHandeler(){
        setIsDisplay((prevState)=>!prevState);
    }
    
    function sendTaskHandeler(){

    }
    useEffect(() => {
        modalRef.current.style.display = isDisplay?"block":"none";
    }, [isDisplay])
    
    return (
        <Fragment>
            <div className={classes.button+" "+classes.addTask} onClick={clickModalHandeler}>+Add task</div>
                <div ref={modalRef} className={classes.modal}>
                    <div className={classes.form}>
                        <div className={classes.container}>
                            <div>
                                <input ref={titleInputRef} placeholder="Please enter the task title"/>
                            </div>
                            <div>
                                <textarea ref={titleTextRef} placeholder="Enter the detailed information"/>
                            </div>
                            <div className={ classes.button +" "+ classes.add} onClick={sendTaskHandeler}>Add</div>
                            <div className={classes.button +" "+ classes.cancel} onClick={clickModalHandeler}>Cancel</div>
                        </div>
                    </div>
            </div>
        </Fragment>
    )
};
const Item = (props) => {
    return <li><span>{props.title}</span><span onClick={props.deleteItem}><span className={classes.cross}>+</span></span></li>;
};
export default Item;