import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import Fallback from "../UI/Fallback";
import Item, { InputForm } from "./Item";
import classes from "./Items.module.css";

let to_do_items = [
    {"id":0,"title":"First Item Added","time_created":"08/31/2022"},
    {"id":1,"title":"Second Item Added","time_created":"08/31/2022"},
    {"id":2,"title":"Third Item Added","time_created":"08/31/2022"},
    {"id":3,"title":"Third Item Added","time_created":"08/31/2022"},
    {"id":4,"title":"Third Item Added","time_created":"08/31/2022"},
];
const Items = (props) => {
    const [toDos, setToDos] = useState(to_do_items);
    function deleteItemHandeler(itemId){
        setToDos(toDos.filter(item => item.id != itemId));
        console.log("test this",itemId, toDos);
    };
    function addItemHandeler(itemId){
        setToDos(toDos.filter(item => item.id != itemId));
        console.log("test this",itemId, toDos);
    };
    return(
        <ul>
            <InputForm className={classes.form}/>
            {toDos.length  ?toDos.map(item=> <Item title={item.title} key={item.id} deleteItem={() => deleteItemHandeler(item.id)}/>):<Fallback></Fallback>}
        </ul>
    );
};
export default Items;