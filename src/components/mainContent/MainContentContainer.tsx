import { Box } from "@mui/material";
import { useRef, type ReactElement } from "react";
import backgroundImage from "../../assets/images/Gemini_Generated_Image_b5t0yb5t0yb5t0yb.png";
import MainText from "./MainText";
import { mainTexts } from "../../data/mainTexts";
import { useMainContentAnimation } from "../../hooks/useAnimation";
import HeaderContainer from "../Header/HeaderContainer";
import ContainerMainText from "../ContainerMainText";

export default function MainContentContainer(props: {
  className: string;
}): ReactElement {
  const container = useRef(null);
  const mainText = useRef(null);
  useMainContentAnimation(container, mainText);

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
      <HeaderContainer />
      <ContainerMainText
        child={
          <MainText
            ref={mainText}
            title={mainTexts.title}
            desc={mainTexts.desc}
          />
        }
      />
    </Box>
  );
}
