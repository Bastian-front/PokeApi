
import { Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Barra = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" alt="" height={"50px"}
                     /> </Navbar.Brand>
                    <Nav className="me-3">
                        <NavLink className={({isActive})=>(isActive?"active": undefined)} to="/">Home</NavLink>
                        {" - "}
                        <NavLink className={({isActive})=>(isActive?"active": undefined)} to="/pokemons">Personajes</NavLink>
                      
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Barra


