import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../images/staff_icon.png';

const TopNavbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('auth')
        navigate('/login')
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" className='w-100'>
            <Container fluid>
                <Navbar.Brand href="/"><img src={logoImage} className='img-fluid'></img><span className='align-bottom logo-text ps-1'>StaffEZ</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-5">
                        <Nav.Link to='/' as={Link}>Home</Nav.Link>
                        <Nav.Link to='/employee' as={Link}>Employee</Nav.Link>
                    </Nav>
                    <span className='text-pink'>|</span>
                    <Navbar.Text className='justify-content-end'>
                        <Button type="button" onClick={handleLogout} variant="" className='button'>LOGOUT</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavbar