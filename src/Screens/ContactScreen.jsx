import { Container } from "react-bootstrap"
import { useNavigate, useLocation } from "react-router-dom";

const ContactScreen = props=>{
    console.log(props, useLocation());
    const navigate=useNavigate();
    setTimeout(()=>{
        navigate("/about");
    },2000);
    return (
        <Container className='mt-2'>
            ContactScreen
        </Container>
    )
}

export default ContactScreen;