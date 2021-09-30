import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const SingleTrack = (props) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const onFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <Container className="my-3 ml-3" id="singleRecent">
            <Row>
            {props.hasNumbers && <Col md={1}>
                    <p className="mt-4 ml-5 text-muted">{props.number}.</p>
                </Col>}
                <Col md={2}>
                    <a href=""><img className="mt-2 ml-5" src={props.img} width="60px" height="60px" /></a>
                </Col>
                <Col md={1}>
                    <p id="heartIcon" className="mt-4"><FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeart} onClick={onFavorite} /></p>
                </Col>
                <Col md={4}>
                    <a href="" id="linkHover"><p id="trackName" className="mt-4 text-muted">{props.song}</p></a>
                </Col>
                <Col md={3}>
                    <a href="" id="linkHover"><p id="trackName" className="mt-4 text-muted">{props.artist}</p></a>
                </Col>
                {props.showTimes && <Col md={1}>
                    <p className="mt-3 text-muted">28 Sep 2:05pm</p>
                </Col>}
            </Row>
        </Container>
    )
}

export default SingleTrack