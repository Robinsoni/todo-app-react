import Backdrop from "../UI/Backdrop";
import classes from "../UI/Backdrop.module.css";
import detailsClasses from "./ItemDetails.module.css";

const ItemDetails = (props) => {
    console.log("*** ItemDetails props" ,  props);
    return (
            <Backdrop>
                
                <div className={detailsClasses.title}>{props.title}</div>
                <div className={detailsClasses.desc}>{props.desc}</div>
                <div className={classes.button +" "+ classes.cancel} onClick={props.close}>Close</div>
            </Backdrop>
            );
}
export default ItemDetails;