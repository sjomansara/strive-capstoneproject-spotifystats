import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"


const SingleArtist = (props) => {
    return (
            <Card id="albumCard" className="ml-3 mb-3" style={{ width: '13.25rem' }}>
            {!props.hideLink ? <Link to={"/details/artist/" + props.id} id="linkHover">
                <Card.Img className="rounded-0" variant="top" height="212px" src={props.img} />
            </Link> : <Card.Img className="rounded-0" variant="top" height="212px" src={props.img} />}
            <Card.Body>
            {!props.hideLink ? <Link to={"/details/artist/" + props.id} id="linkHover"><Card.Title key={props.id} id="trackName" className="text-muted">{!props.hideNumber && props.number + "."} {props.artist}</Card.Title></Link> : <Card.Title key={props.id} id="trackName" className="text-muted">{!props.hideNumber && props.number + "."} {props.artist}</Card.Title>}
            </Card.Body>
            </Card>
    )
}

export default SingleArtist