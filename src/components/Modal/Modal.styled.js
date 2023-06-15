import styled from '@emotion/styled';

export const Overlay = styled.div`
background-color: #01010a9c;
position: fixed;
top: 0;
left: 0;
z-index: 2000;
width: 100%;
height: 100%;
`;

export const Modal= styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 900px;
height: 600px;

  .modal-content {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;