import "./index.css"
import moment from "moment"
import {Card, Button} from "react-bootstrap"

let WeatherCard = ({date, temp, min, max}) => {
    return(
        <div className="ab">
        <Card
        style={{  margin: "10px", backgroundColor: "#87CEEB", justifyContent: "center"}}
        border="success"
        >
            <Card.Body>
                <Card.Title className="wg">{moment(date).format("dddd ha")}</Card.Title>
                <Card.Text><h1>{temp} C</h1></Card.Text>
                <Card.Text>Min: {min} C | Max: {max} C</Card.Text>
            </Card.Body>
        
        </Card>
        
        </div>
)}

export default WeatherCard;