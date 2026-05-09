import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { ClerkProvider } from '@clerk/react'
import { router } from '@/router'
import '@/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ClerkProvider publishableKey="pk_test_ZnVsbC1nb2JibGVyLTY1LmNsZXJrLmFjY291bnRzLmRldiQ">
            <RouterProvider router={router} />
        </ClerkProvider>
    </React.StrictMode>,
)