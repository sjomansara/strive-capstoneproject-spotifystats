import { Container, Row } from "react-bootstrap"

const PageCover = () => {
    const location = window.location.pathname
    let header = ""

    switch(location) {
        case "/recentlyplayed":
            header = "Recently Played"
            break
        case "/tracks":
            header = "Tracks"
            break
        case "/albums":
            header = "Albums"
            break
        case "/artists":
            header = "Artists"
            break
        default: 
            header = ""
            break
    }
    
    return (
        <Container className="my-3 ml-3" id="pageCover">
            <h2 className="pl-2" id="pageCoverText">{header}</h2>
        </Container>
    )
}

export default PageCover