import newsApi from './components/NewsApi';
import topheadlines from './components/TopHeadlines'
import detail from './components/DetailPage'

export default [
    { path: '/', component: newsApi },
    { path: '/topheadlines/:id', component: topheadlines },
    { path: '/:category/:id', component: detail }
]