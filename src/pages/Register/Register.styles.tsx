import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledGridContainer = styled(Grid)`
  min-width: 100vw;
  min-height: 100vh;
  background: url("https://t4.ftcdn.net/jpg/06/51/49/91/360_F_651499128_02uzpyQcBI1ypjF9zNaVxgWvf6Jj4DIU.jpg")
    center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right, #070808, #F6F9F8);
    opacity: 0.6;
  }
`;