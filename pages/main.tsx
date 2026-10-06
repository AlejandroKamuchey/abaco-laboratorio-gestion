import React from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/geist/400.css';
import '@fontsource/geist/500.css';
import '@fontsource/geist/600.css';
import '../app/globals.css';
import Dashboard from '../app/page';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Dashboard/></React.StrictMode>);
