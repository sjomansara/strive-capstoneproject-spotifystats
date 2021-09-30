import { Container, Card, Row } from "react-bootstrap"

const SingleAlbum = (props) => {
    return (
        <Container className="my-3 ml-3">
            <Row>
            <Card id="albumCard" className="ml-3" style={{ width: '13rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title className="text-muted">1. {props.title}</Card.Title>
                <Card.Text className="text-muted">
                {props.artist}
                </Card.Text>
            </Card.Body>
            </Card>
            </Row>
        </Container>
    )
}

export default SingleAlbum