import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import Fallback from "../UI/Fallback";
import Item, { InputForm } from "./Item";
import classes from "./Items.module.css";

let to_do_items = [
    
];
const Items = (props) => {
    const [toDos, setToDos] = useState(to_do_items);
    function deleteItemHandeler(itemId){
        setToDos(toDos.filter(item => item.id != itemId));
        console.log("test this",itemId, toDos);
    };
    function addItemHandeler(listItem){
        console.log("listItem**",listItem);
        setToDos(prevList =>  [...prevList,{"id":prevList.length?prevList.length:0,...listItem}] );
    };
    return(
        <ul>
            <InputForm addItem={addItemHandeler} className={classes.form}/>
            {toDos.length  ?toDos.map(item=> <Item title={item.title} key={item.id} deleteItem={() => deleteItemHandeler(item.id)}/>):<Fallback />}
        </ul>
    );
};
export default Items;