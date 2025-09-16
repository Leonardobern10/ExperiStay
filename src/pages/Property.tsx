import ImagePropertyComponent from '@components/ImagePropertyComponent';
import type { ReactElement } from 'react';
import test from '@images/Gemini_Generated_Image_y0d4kby0d4kby0d4.png';
import { PageContainer } from '@components/ui/PageContainer';
import { Box, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LabelProperty from '@components/HighLights/LabelHighlight';
import CircleIcon from '@mui/icons-material/Circle';
import { Form } from 'react-router';
import RatingComponent from '@components/Ratings/RatingComponent';

export default function Property(): ReactElement {
     return (
          <PageContainer
               sx={(theme) => ({ marginTop: theme.spacing(12), width: '90%' })}>
               <Box
                    sx={(theme) => ({
                         paddingY: theme.spacing(10),
                         height: '30%',
                    })}>
                    <ImagePropertyComponent
                         src={test}
                         name="text"
                         rating={5}
                         location="Miami"
                         label="Muito bom"
                    />
                    <Box
                         sx={(theme) => ({
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              columnGap: theme.spacing(4),
                         })}>
                         <Box>
                              <Typography variant="h1">
                                   Penthouse Ipanema
                              </Typography>
                              <Stack>
                                   <LocationOnIcon />
                                   <Typography variant="body2">
                                        Rio de Janeiro, RJ
                                   </Typography>
                              </Stack>
                              <Stack>
                                   <Stack>
                                        <GroupIcon />
                                        <Typography variant="subtitle1">
                                             6 hóspedes
                                        </Typography>
                                   </Stack>
                                   <Stack>
                                        <BedIcon />
                                        <Typography variant="subtitle1">
                                             3 quartos
                                        </Typography>
                                   </Stack>
                                   <Stack>
                                        <BathtubIcon />
                                        <Typography variant="subtitle2">
                                             3 banheiros
                                        </Typography>
                                   </Stack>
                              </Stack>
                              <Typography variant="body2">
                                   Cobertura de luxo com vista panorâmica para a
                                   praia de Ipanema. Localização privilegiada no
                                   coração do Rio de Janeiro com acesso aos
                                   melhores pontos turísticos.
                              </Typography>
                              <Box>
                                   <Typography variant="h2">
                                        Características Únicas
                                   </Typography>
                                   <Stack>
                                        <LabelProperty labelName="Luxo" />
                                        <LabelProperty labelName="Luxo" />
                                        <LabelProperty labelName="Luxo" />
                                   </Stack>
                              </Box>
                              <Box>
                                   <Typography variant="h2">
                                        Comodidades
                                   </Typography>
                                   <Box>
                                        <Stack>
                                             <CircleIcon />
                                             <Typography variant="body2">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                        <Stack>
                                             <CircleIcon />
                                             <Typography variant="body2">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                        <Stack>
                                             <CircleIcon />
                                             <Typography variant="body2">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                        <Stack>
                                             <CircleIcon />
                                             <Typography variant="body2">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                        <Stack>
                                             <CircleIcon />
                                             <Typography variant="body2">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                        <Stack>
                                             <CircleIcon />
                                             <Typography variant="body2">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                   </Box>
                              </Box>
                         </Box>
                         <Box>
                              <Box>
                                   <input
                                        type="text"
                                        name=""
                                        id=""
                                   />
                                   <input
                                        type="text"
                                        name=""
                                        id=""
                                   />
                                   <input
                                        type="text"
                                        name=""
                                        id=""
                                   />
                                   <input
                                        type="text"
                                        name=""
                                        id=""
                                   />
                              </Box>
                         </Box>
                    </Box>
                    <Box>
                         <Typography variant="h2">
                              Avaliações dos hóspedes
                         </Typography>
                         <Box>
                              <RatingComponent
                                   rating={3}
                                   textRating={
                                        'O penthouse no Rio superou todas as expectativas. Ver o pôr do sol de Ipanema da nossa varanda privativa foi um momento único e emocionante'
                                   }
                                   name={'João Saldanha'}
                                   location={'Belo Horizonte, MG'}
                              />
                         </Box>
                    </Box>
               </Box>
          </PageContainer>
     );
}
