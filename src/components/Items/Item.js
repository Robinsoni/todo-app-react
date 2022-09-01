import classes from "./Item.module.css";
export const InputForm = (props) => {return <div className={classes.form}><input placeholder="Please Enter The Task"/><span>+</span></div>};
const Item = (props) => {
    return <li><span>{props.title}</span><span onClick={props.deleteItem}><span className={classes.cross}>+</span></span></li>;
};
export default Item;