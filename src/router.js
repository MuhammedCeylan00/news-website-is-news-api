import newsApi from './components/NewsApi';
import detail from './components/DetailPage'

export default [
    { path: '/', component: newsApi },
    { path: '/:category/:id', component: detail }
]