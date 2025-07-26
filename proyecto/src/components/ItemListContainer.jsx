import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({saludo}) => {

    const [data, setData] = useState([])

    const{category}= useParams()


    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(category){
                
                setData(res.filter((prod)=> prod.category === category))
            }else{
                
            setData(res)
            }
        })
        .catch((error)=> console.log(error))
    },[category])

console.log(data, 'data')

    return(
        <div>
            <h1 className="saludo">{saludo}
            {category ? category : ""}
            </h1>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer