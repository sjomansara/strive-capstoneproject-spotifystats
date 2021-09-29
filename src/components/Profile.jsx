import { Container, Row } from "react-bootstrap"

const Profile = () => {
    return (
        <Container className="my-4 ml-4 mr-2" id="profile">
        <Row>
            <img id="profileImg" width="170px" height="auto" className="my-5 ml-5 mr-4" src="https://avatars.githubusercontent.com/u/86473615?v=4" />
            <h4 className="" id="profileText">Username</h4>
        </Row>
        </Container>
    )
}

export default Profile