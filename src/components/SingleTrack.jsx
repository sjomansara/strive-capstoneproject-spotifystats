import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { Link } from "react-router-dom"

const SingleTrack = (props) => {
    const [isFavorite, setIsFavorite] = useState(props.isFavorite ? props.isFavorite : false)

    const onFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    const date = new Date(props.time).toDateString()

    return (
        <Container className={props.small ? "my-0 ml-0" : "my-3 ml-3"} id={props.small ? "singleRecentSmall" : "singleRecent"}>
            <Row>
            {props.hasNumbers && <Col md={1}>
                    <p className="mt-4 ml-5 text-muted">{props.number}.</p>
                </Col>}
                {props.showCover && <Col md={2}>
                    <Link to={"/details/album/" + props.albumId} id="linkHover"><img className={props.small ? "mt-2 ml-1 hvr-grow" : "mt-2 ml-5 hvr-grow"} src={props.img} width="60px" height="60px" /></Link>
                </Col>}
                <Col md={props.small ? "2" : "1"}>
                    <p id="heartIcon" className={props.small ? "mt-4 ml-3 hvr-pulse-grow" : "mt-4 hvr-pulse-grow"}><FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeart} onClick={onFavorite} /></p>
                </Col>
                <Col md={props.small ? "6" : "4"}>
                    <Link to={"/details/track/" + props.id} id="linkHover"><p id="trackName" className="mt-4 text-muted">{props.song}</p></Link>
                </Col>
                <Col md={props.small ? "4" : "3"}>
                    <Link to={"/details/artist/" + props.artistId} id="linkHover"><p id="trackName" className="mt-4 text-muted">{props.artist}</p></Link>
                </Col>
                {props.showTimes && <Col md={2}>
                    {props.hasDate && <p className="mt-3 text-muted">{date}</p>}
                </Col>}
            </Row>
        </Container>
    )
}

export default SingleTrack