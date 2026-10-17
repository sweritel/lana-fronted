import { createBrowserRouter } from "react-router"
import { RootLayout } from "./layouts/RootLayout"
import { Home } from "./pages/Home"
import { Canciones } from "./pages/canciones"
import { Contacto } from "./pages/Contacto"
import { Pagina404 } from "./pages/Pagina404"

export const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
        { index: true, element: <Home /> },
        { path: "canciones", element: <Canciones /> },
        { path: "contacto", element: <Contacto /> },
        { path: "*", element: <Pagina404 /> },
    ]
}])