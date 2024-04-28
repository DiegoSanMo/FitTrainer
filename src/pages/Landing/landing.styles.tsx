import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledGridContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  background: url("https://t4.ftcdn.net/jpg/06/51/49/91/360_F_651499128_02uzpyQcBI1ypjF9zNaVxgWvf6Jj4DIU.jpg")
    center center no-repeat;
  background-size: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right, #002f4b, #002f4b);
    opacity: 0.6;
  }
`;