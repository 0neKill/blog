import React from 'react';
import {createRoot} from 'react-dom/client';

const container = window.document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(<div>Hello</div>)
