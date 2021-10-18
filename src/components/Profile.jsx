import { Container, Row } from "react-bootstrap"

const Profile = (props) => {
    const data = props.userInfo

    return (
        <Container className="my-3 ml-3" id="profile">
            {data && <Row>
                <img id="profileImg" width="170px" height="170px" className="mb-5 mt-4 ml-5 mr-2" src={data.images[0].url} />
                <h4 id="profileText" className="ml-1">Welcome to your Stats, <a id="profileText" href={data.external_urls.spotify}>{data.display_name}</a>!</h4>
            </Row>}
        </Container>
    )
}

export default Profile