import {useParams, Link} from 'react-router-dom'

export function Product(){
    const {id} = useParams()
    return(
        <div>
            <h1>Product {id}</h1>
            <Link to="/products">Back</Link>
        </div>
    )
}