import { Container, Row } from "react-bootstrap"

const Profile = () => {
    return (
        <Container className="my-5 mx-4" id="profile">
        <Row>
            <img id="profileImg" width="170px" height="auto" className="my-5 ml-5 mr-4" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.18169-9/27654749_10215607486247128_6976249908559879538_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YKQdJ9VI0V4AX9LEbzH&_nc_ht=scontent-arn2-1.xx&oh=0b8b5c06a850225f54e8ddfd537516c9&oe=617AD44D" />
            <h4 className="" id="profileText">Username</h4>
        </Row>
        </Container>
    )
}

export default Profile