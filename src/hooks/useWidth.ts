import { useEffect, useState } from "react";

export default function useWidth(): number {
  // Definição das variáveis reativas
  const [width, setWidth] = useState<number>(window.innerWidth);

  // Função que ao ser disparada, armazena o novo valor da largura da tela
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    // Adiciona um evento que dispara a função sempre que um efeito de
    // alteração da largura é disparado
    window.addEventListener("resize", handleResize);

    // Remove o listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // monta/desmonta apenas uma vez

  return width;
}
