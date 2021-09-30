import { Container, Card, Row } from "react-bootstrap"

const SingleAlbum = () => {
    return (
        <Container className="my-3 ml-3">
            <Row>
            <Card id="albumCard" className="ml-3 mt-3" style={{ width: '13rem' }}>
            <Card.Img variant="top" src="https://lastfm.freetls.fastly.net/i/u/770x0/24ff278069133faeb1ab65afb439a25d.jpg#24ff278069133faeb1ab65afb439a25d" />
            <Card.Body>
                <Card.Title className="text-muted">1. Rumours (Super Deluxe)</Card.Title>
                <Card.Text className="text-muted">
                Fleetwood Mac
                </Card.Text>
            </Card.Body>
            </Card>
            </Row>
        </Container>
    )
}

export default SingleAlbum