import { Container, Card, Row } from "react-bootstrap"

const SingleAlbum = (props) => {
    return (
        <Container className="my-3 ml-3">
            <Row>
            <Card id="albumCard" className="" style={{ width: '13.2rem' }}>
            <Card.Img variant="top" className="rounded-0" src={props.img} />
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