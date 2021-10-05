import { Container, Card, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const SingleAlbum = (props) => {
    return (
            <Card id="albumCard" className="ml-3 mb-3" style={{ width: '13.2rem' }}>
            <Link to={"/details/album/" + props.id} id="linkHover">
            <Card.Img variant="top" className="rounded-0" src={props.img} />
            <Card.Body>
                <Link to="/details" id="linkHover"><Card.Title className="text-muted" id="trackName">{props.number}. {props.title}</Card.Title></Link>
                <Link to="/details" id="linkHover"><Card.Text className="text-muted" id="trackName">{props.artist}</Card.Text></Link>
            </Card.Body>
            </Link>
            </Card>
    )
}

export default SingleAlbum