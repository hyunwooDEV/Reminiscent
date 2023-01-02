import logo from './logo.svg';
import './App.css';
import { Nav, Container, Navbar} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Carousel from './routes/carousel';
import SignIn from './routes/signIn';
import SignUp from './routes/signUp';
import Write from './routes/write';


function App() {
  return (
    <div className="App">

    <Container>
      
      <Nav className='justify-content-end' defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/signup">회원가입</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/signin">로그인</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/">로그아웃</Nav.Link>
        </Nav.Item>
      </Nav>    
      <Nav.Link href="/"><h2>Remember Us</h2></Nav.Link>

    <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/write" element={<Write />} />
    </Routes>
    
    </Container>



      


    </div>
  );
}

export default App;
