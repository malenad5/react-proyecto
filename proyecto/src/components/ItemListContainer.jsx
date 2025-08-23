import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { products } from "../mock/AsyncService";
import { addDoc} from "firebase/firestore";


const ItemListContainer = ({ saludo }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();


  const subirDataFirebase = () => {
    const collectionProductos = collection(db, "productos");
    products.forEach((prod) => {
      addDoc(collectionProductos, prod)
        .then(() => console.log(`Producto ${prod.name} subido`))
        .catch((error) => console.log("Error al subir producto:", error));
    });
  };

  useEffect(() => {
    setLoading(true);

    const productsRef = category
      ? query(collection(db, "productos"), where("category", "==", category))
      : collection(db, "productos");

    getDocs(productsRef)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
      })
      .catch((error) => console.log("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h1 className="saludo">
            {saludo} {category ? category : ""}
          </h1>
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
