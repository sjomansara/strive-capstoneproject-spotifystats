import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const SingleArtist = (props) => {
    return (
            <Card id="albumCard" className="" style={{ width: '13.2rem' }}>
            <Link to="/details" id="linkHover"><Card.Img className="rounded-0" variant="top" src={props.img} /></Link>
            <Card.Body>
            <Link to="/details" id="linkHover"><Card.Title key={props.id} id="trackName" className="text-muted">{props.number}. {props.artist}</Card.Title></Link>
            </Card.Body>
            </Card>
    )
}

export default SingleArtist