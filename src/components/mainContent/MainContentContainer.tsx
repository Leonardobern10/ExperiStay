import { Box } from "@mui/material";
import { useRef, type ReactElement } from "react";
import backgroundImage from "../../assets/images/Gemini_Generated_Image_b5t0yb5t0yb5t0yb.png";
import MainText from "./MainText";
import { mainTexts } from "../../data/mainTexts";
import { useMainContentAnimation } from "../../hooks/useAnimation";
import GridMainText from "./ContainerMainText";

export default function MainContentContainer(props: {
  className?: string;
}): ReactElement {
  const container = useRef(null);
  const mainText = useRef(null);
  useMainContentAnimation(container, mainText);

  return (
    <Box
      className={props.className}
      ref={container}
      sx={{
        padding: (theme) => theme.spacing(5),
        borderRadius: '5rem'
      }}
    >
      <Box  sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        padding: { xs: 1, md: 2},
      }}>

      <GridMainText
        child={
          <MainText
            ref={mainText}
            title={mainTexts.title}
            desc={mainTexts.desc}
          />
        }
      />
      </Box>
    </Box>
  );
}
