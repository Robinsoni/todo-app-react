import classes from "./Backdrop.module.css";
const Backdrop = (props) => {
    return (
        <div  className={classes.modal}>
            <div className={classes.form}>
                <div className={classes.container}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default Backdrop;