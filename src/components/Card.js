import "./Card.css";

const Card = ({name, img, status, species, gender})=>{
    return (
        <div className="Card">
            <div className="img">
                <img src={img}/>
            </div>
            <div className="text">
                <h2> {name}</h2>
                <p> {status} - {species}</p>
                <p> {gender}</p>
            </div>
            
        </div>
    )
}

export default Card;