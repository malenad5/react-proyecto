import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../service/firebase';
import ItemDetail from './ItemDetail';
import LoaderComponent from './LoaderComponent';

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [cargando, setCargando] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchProductByField = async () => {
      setCargando(true);
      try {
        const productosRef = collection(db, "productos");
       const q = query(productosRef, where("id", "==", id)); 
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0];
          setDetalle({ id: docData.id, ...docData.data() });
        } else {
          setInvalid(true); 
        }
      } catch (error) {
        console.error("Error al buscar producto:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProductByField();
  }, [id]);

  if (invalid) {
    return (
      <div className="text-center mt-5">
        <h2> El producto no existe</h2>
        <Link className="btn btn-dark mt-3" to="/">Volver al Home</Link>
      </div>
    );
  }

  return (
    <>
      {cargando ? <LoaderComponent /> : <ItemDetail detalle={detalle} />}
    </>
  );
};

export default ItemDetailContainer;
