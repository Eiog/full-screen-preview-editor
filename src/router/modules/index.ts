import homeRoutes from "./home.routes"
import editorRoutes from './editor.routes'
import previewRoutes from './preview.routes'
import LoginRoutes from './login.routes'
const moduleRoutes = [
    homeRoutes,
    ...editorRoutes,
    LoginRoutes,
    ...previewRoutes
]
export default moduleRoutes