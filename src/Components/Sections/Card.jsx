import { Link, useLoaderData, useParams } from "react-router-dom";

const Card = () => {
    const data = useLoaderData()
    console.log(data)
    const { id } = useParams()
    const detailedCard = data.find(prop => prop.id === id)
    console.log(detailedCard)
    const { estate_title, Status} = detailedCard 
    console.log(Status)
    return (
        <div className="pt-[79px]">
            <h1>Card no:{id}</h1>
            <p>{estate_title}</p>
            <button className="btn"><Link to='/'>Home</Link></button>
        </div>
    );
};

export default Card;