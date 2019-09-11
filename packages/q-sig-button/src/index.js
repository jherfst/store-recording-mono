import styled from 'styled-components';

const ButtonContainer = styled.button`
 text-transform: capitalize;
 font-size: 1.43rem;
 background: transparent;
 border: 0.1rem solid #832809;
 border-color: ${props => props.cart? "#ffa400": "#f3f3f3"};
 color: ${prop => prop.cart? "#ffa400": "#f3f3f3"};
 border-radius: 0.5rem;
 padding: 0.2rem 0.5rem;
 cursor: pointer;
 margin: 0.2rem 0.5rem 0.2rem 0;
 transition: all 0.5s ease-in-out;
 &:hover {
     background: ${prop => prop.cart? "#ffa400": "#ffa400"};;
     color: #832809;
 }
 &:focus {
     outline: none;
 }
`;

export default ButtonContainer;