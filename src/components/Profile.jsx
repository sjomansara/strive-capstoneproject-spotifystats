import { Container, Row } from "react-bootstrap"

const Profile = () => {
    return (
        <Container className="my-3 ml-3" id="profile">
        <Row>
            <img id="profileImg" width="170px" height="auto" className="my-5 ml-5 mr-2" src="https://avatars.githubusercontent.com/u/86473615?v=4" />
            <h4 id="profileText" className="ml-1">Welcome to Stats, Sara!</h4>
        </Row>
        </Container>
    )
}

export default Profile