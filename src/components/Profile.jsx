import { Container, Row } from "react-bootstrap"

const Profile = () => {
    return (
        <Container className="my-3 ml-3" id="profile">
        <Row>
            <img id="profileImg" width="170px" height="auto" className="my-5 ml-5 mr-2" src="https://avatars.githubusercontent.com/u/86473615?v=4" />
            <a href="" id="profileText"><h4 className="ml-1">Username</h4></a>
        </Row>
        </Container>
    )
}

export default Profile