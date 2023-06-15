import styled from "@emotion/styled";

export const GalleryItem = styled.li`
height: 400px;
  background-color: #1a1a1a;
  border: 2px solid #6f76c7;
  border-radius: 4px;
  flex-direction: column;
  display: flex;
  position: relative;
  overflow: hidden;
  
  .galleryImg {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`

