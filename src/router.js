import newsApi from './pages/NewsApi';
import detail from './pages/DetailPage'

export default [
    { path: '/', component: newsApi },
    { path: '/:category/:id', component: detail }
]