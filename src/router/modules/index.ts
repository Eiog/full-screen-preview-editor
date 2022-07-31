import homeRoutes from "./home.routes"
import editorRoutes from './editor.routes'
import previewRoutes from './preview.routes'
import LoginRoutes from './login.routes'
import ScreenRoutes from './screen.routes'
const moduleRoutes = [
    homeRoutes,
    LoginRoutes,
    ...editorRoutes,
    ...previewRoutes,
    ...ScreenRoutes
]
export default moduleRoutes