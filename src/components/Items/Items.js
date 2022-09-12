import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { errorActions } from "../store/error";
import Fallback from "../UI/Fallback";
import Item, { InputForm } from "./Item";
import ItemDetails from "./ItemDetails";
import classes from "./Items.module.css";
const Items = (props) => {
    const [toDos, setToDos] = useState([]);
    const [displayDetailsFlag, setDisplayDetailsFlag] = useState(false);
    const [selectedItem, setSelectedItem] = useState(undefined);
    const dispatch = useDispatch();
    function deleteItemHandeler(itemId){
        setToDos(toDos.filter(item => item.id != itemId));
    };
    
    function addItemHandeler(listItem){
        if(!listItem.title.length || !listItem.desc.length){
            
            dispatch(errorActions.showMessage());
            if(!listItem.title.length && !listItem.desc.length){
                dispatch(errorActions.setErrorMsg("Please enter title and discription"));
            }else if(!listItem.title.length){
                dispatch(errorActions.setErrorMsg("Please enter title also."));
            }else{
                dispatch(errorActions.setErrorMsg("Please enter description also."));
            }
            
            return;
        }else{
           
            let key = new Date();
            setToDos(prevList =>  [...prevList,{"id":key.getTime(),...listItem}] );
        }
    };
    let itemDescription;
    function itemDetailsHandeler(itemId){
        setDisplayDetailsFlag(prev => !prev);
        var item =  toDos.filter(item => item.id == itemId);
        setSelectedItem(item[0]);
    };
    function closeHandeler(){
        setDisplayDetailsFlag(prev => !prev);
    }
    let ItemList =  
             

                    <ul>
                        <InputForm addItem={addItemHandeler} />
                        {toDos.length  ?toDos.map(item=> <Item 
                                                        title={item.title}
                                                        key={item.id} 
                                                        deleteItem={() => deleteItemHandeler(item.id)}
                                                        itemDetails={() => itemDetailsHandeler(item.id)}
                                                    />
                                                ):<Fallback />
                        }
                    </ul> 
                ;
    return(
        <Fragment>
            {displayDetailsFlag?<ItemDetails close ={closeHandeler} title={selectedItem.title} desc={selectedItem.desc} id={selectedItem.id}/>:ItemList}
        </Fragment>
    );
};
export default Items;