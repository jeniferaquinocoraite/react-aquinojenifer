import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import Loading from '../loading';

const ItemDetailContainer = () => {
    const [item, setItem ]=useState ({});
    const [cargar, setCargar ]= useState(true);

    const {id} = useParams ();
useEffect (()=>{
  const db =getFirestore();
  const documento= doc(db, "items", id);
  getDoc(documento).then((snapShot)=>{
    if (snapShot.exists()){
      setItem({id:snapShot.id, ...snapShot.data()});
      setCargar(false);

    }

  });
}, [id]);

  return (
    <div >
   {cargar ? <Loading/> : 
    <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer
