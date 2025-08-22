import { Box, Grid } from "@mui/material";
import { useRef, type ReactElement } from "react";
import backgroundImage from "../../assets/images/Gemini_Generated_Image_wvn7uswvn7uswvn7.png";
import MainText from "../MainText";
import { mainTexts } from "../../data/mainTexts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MainContentContainer(props: {
  className: string;
}): ReactElement {
  const container = useRef(null);
  const mainText = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(container.current, { duration: 1, opacity: 0 }).from(
      mainText.current,
      {
        duration: 1,
        opacity: 0,
        x: -150,
      }
    );
  }, []);
  return (
    <Box
      className={props.className}
      ref={container}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: "brightness(80%) contrast(90%)",
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        container
        component="main"
        sx={{
          width: "100%",
          padding: 4,
          justifyContent: "flex-start",
          alignItems: "end",
          height: "90%",
        }}
      >
        <MainText
          ref={mainText}
          title={mainTexts.title}
          desc={mainTexts.desc}
        />
      </Grid>
    </Box>
  );
}
