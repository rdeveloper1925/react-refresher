import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CardScreen=props=>{
    const params=useParams();
    return(
        <Container>
            This is the card screen meant for {params.user}
        </Container>
    )
}

export default CardScreen;