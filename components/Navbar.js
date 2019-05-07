//Packages
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => (
    <NavbarContainer>
        <NavbarLogo>
            <h1>Hacks</h1>
        </NavbarLogo>

        <NavbarListContainer>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/news">
                <a>News</a>
            </Link>
        </NavbarListContainer>
    </NavbarContainer>
);

export default Navbar;

//Styled Components
const NavbarContainer = styled.div`
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
`

const NavbarLogo = styled.div`
    width: 10%;
    height: 30%;
    background: #F56361;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h1 {
        color: white;
        font-size: 22px;
    };
`

const NavbarListContainer = styled.ul`
    width: 8%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    a {
        color: #222324;
        text-decoration: none;
        font-size: 16px;
        &:hover {
            color: #CFCFD0;
            cursor: pointer;
        }
    }
`