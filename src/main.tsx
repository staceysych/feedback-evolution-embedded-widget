import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Find all widget divs
const widgetDivs = document.querySelectorAll('.feedback-evolution-widget');

// Create a root and render for each widget
widgetDivs.forEach(div => {
  createRoot(div).render(
    <StrictMode>
      <App projectId={(div as HTMLElement).dataset.projectId as string} />
    </StrictMode>
  );
});


