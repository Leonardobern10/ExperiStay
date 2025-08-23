import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyImageExample(props: { src: string }) {
  return (
    <LazyLoadImage
      alt="Imagem pesada"
      src={props.src}
      effect="blur" // Efeito visual enquanto carrega
      width="100%"
      height="auto"
    />
  );
}
