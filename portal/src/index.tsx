import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { AppClientProvider } from './context/use-client/client-context/client-provider';
import { http } from './clients/http-client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Login } from './components/login/login';
import { GeneralContext } from './context/general-context/general-context';
import { useState } from 'react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AppClientProvider clients={{ http }}>
        <App />
      </AppClientProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
