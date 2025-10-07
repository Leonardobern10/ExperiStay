import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { BrowserRouter, Route, Routes } from 'react-router';
import Services from './pages/Services';
import Home from './pages/Home';
import Destines from './pages/Destines';
import About from '@pages/About';
import Property from '@pages/Property';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<App />}>
                        <Route
                            index
                            element={<Home />}
                        />
                        <Route
                            path="servicos"
                            element={<Services />}
                        />
                        <Route path="destinos">
                            <Route
                                index
                                element={<Destines />}
                            />
                            <Route
                                path=":id"
                                element={<Property />}
                            />
                        </Route>
                        <Route
                            path="about"
                            element={<About />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
