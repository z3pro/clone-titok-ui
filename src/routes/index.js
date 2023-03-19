//layouts
import { HeaderOnly } from "~/components/layout"
//component
import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"

//Dùng cho những router k cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile},
    { path: '/upload', component: Upload,layout: HeaderOnly},
    { path: '/search', component: Search,layout: null},
]
//Dùng cho những router cần đăng nhập 
const privateRoutes = [
]
export {publicRoutes,privateRoutes}