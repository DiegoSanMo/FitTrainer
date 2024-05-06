import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface ImageContainerProps {
  urlImg?: string;
  children?: ReactNode;
}

export default function ImageContainer({
  urlImg = "https://t4.ftcdn.net/jpg/06/51/49/91/360_F_651499128_02uzpyQcBI1ypjF9zNaVxgWvf6Jj4DIU.jpg",
  children,
}: ImageContainerProps) {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        background: `url(${urlImg}) center center no-repeat`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `linear-gradient(to bottom right, #070808, #F6F9F8)`,
          opacity: 0.6,
        },
      }}
    >
      {children}
    </Grid>
  );
}
