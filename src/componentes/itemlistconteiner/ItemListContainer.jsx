import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import Loading from "../loading";
const  ItemListContainer = ()=> {
const {id}= useParams ();
  const [items, setItems] = useState ([]);
  const [cargar, setCargar ]= useState(true);
  useEffect (()=>{
  const db= getFirestore();
const itemsCollection = collection (db,"items");
const q =  id ? query(itemsCollection, where("categoria", "==", id)): itemsCollection;
getDocs(q).then((snapShot) => { 
  setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()} )));
  setCargar(false);
});

}, [id] ); 
   
      return (
      <div className= "container py-5">
        {cargar ? <Loading/> : <ItemList items={items} />}
    </div>
  );} 
    
  export default ItemListContainer