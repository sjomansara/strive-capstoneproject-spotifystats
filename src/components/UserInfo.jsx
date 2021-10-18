import { Container, Row, Col } from "react-bootstrap"

const UserInfo = (props) => {
    const data = props.userInfo
    console.log(data)

    return (
        <Container className="ml-3 text-muted" id="userInfo">
            {data && <Row>
                <Col md={6}>
                <h6>Country: {data.country}</h6>
                <h6>Followers: {data.followers.total}</h6>
                <h6>Subscription type: {data.product}</h6>
                </Col>
                </Row>}
        </Container>
    )
}

export default UserInfo