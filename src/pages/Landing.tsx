import { useTranslation } from "react-i18next";
import { Box, Typography, styled, Button, Stack, ButtonProps } from "@mui/material";
import landing from "../assets/landing.png";

const StyledImage = styled("img")`
  display: flex;
  width: 70vw;
  height: 109vh;
  object-fit: fill;
  position: absolute;
  right: -20%;

  background-color: #6ca7a3;
`;
const StyledTextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 60vh;
  object-fit: fill;
  background-color: #6ca7a3;
`;
const blanco = "#efe5e5";
const azul = "##5ebab3";
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(blanco),
  backgroundColor: blanco,
  "&:hover": {
    backgroundColor: azul,
  },
}));

export default function Landing() {
  const { t } = useTranslation();
  return (
    <Box component="section">
      <StyledTextContainer sx={{ position: "absolute", top: "-5%" }}>
        <Typography
          variant="h1"
          sx={{
            color: "#f1efef",
            fontWeight: "700",
          }}
        >
          {t("landing-page.title")}
        </Typography>
      </StyledTextContainer>

      {/* Landingpage's Paragraph */}

      <StyledTextContainer sx={{ position: "absolute", top: "50%" }}>
        <Typography
          align="justify"
          paragraph
          gutterBottom
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "#efe5e5",
            position: "absolute",
            top: "-10%",
            left: "2%",
            right: "10%",
          }}
        >
          {t("landing-page.description")}
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <ColorButton variant="contained" size="medium">
            Sign up
          </ColorButton>
          <Button variant="outlined" sx={{ color: "#efe5e5" }} size="medium">
            Login in
          </Button>
        </Stack>
      </StyledTextContainer>
      <Box component="section">
        <StyledImage src={landing} alt="landing" />
      </Box>
    </Box>
  );
}
