import type { HighlightType } from "../types/HighlightType";
import type { PropertyHighlightsType } from "../types/PropertyHighlightsType";
import imageExample from '../assets/images/Gemini_Generated_Image_vzc38svzc38svzc3.png';
import bahia from '../assets/images/highlights/bahia_highlight.png';
import manaus from '../assets/images/highlights/amazonas_highlight.png';

export const propertyHighlightsData: PropertyHighlightsType = {
    title: "Imóveis em destaque",
    subtitle: 'Selecionamos cuidadosamente os melhores imóveis para garantir experiências extraordinárias',
    buttonName: 'Acessar catálogo'
}

export const allProperties: Array<HighlightType> = [
    { index: 0, name: 'Penthouse Ipanema', location: 'Rio de Janeiro, RJ', description: 'Cobertura de luxo com vista panorâmica para a praia de Ipanema. Localização privilegiada no coração do Rio de Janeiro com acesso aos melhores pontos turísticos.', price: 1200, rating: 5, liked: false, img: imageExample },
    { index: 0, name: 'Salvador Luxury', location: 'Salvador, BA', description: 'Cobertura de luxo com vista panorâmica para a praia de Ipanema. Localização privilegiada no coração do Rio de Janeiro com acesso aos melhores pontos turísticos.', price: 850, rating: 3, liked: true, img: bahia },
    { index: 0, name: 'Manaus Adventure', location: 'Manaus, AM', description: 'Cobertura de luxo com vista panorâmica para a praia de Ipanema. Localização privilegiada no coração do Rio de Janeiro com acesso aos melhores pontos turísticos.', price: 1600, rating: 5, liked: false, img: manaus },
]