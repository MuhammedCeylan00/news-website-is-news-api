import newsApi from './components/NewsApi';
import entartaintmentDetail from './components/EntartaintmentDetail';
import generalDetail from './components/GeneralDetail';
import healthDetail from './components/HealthDetail';
import scienceDetail from './components/ScienceDetail';
import sportsDetail from './components/SportsDetail';
import technologyDetail from './components/TechnologyDetail';
import businesDetil from './components/BusinesDetail';

export default [
    { path: '/busines/:id', component: businesDetil },
    { path: '/entartaintment/:id', component: entartaintmentDetail },
    { path: '/general/:id', component: generalDetail },
    { path: '/health/:id', component: healthDetail },
    { path: '/science/:id', component: scienceDetail },
    { path: '/sports/:id', component: sportsDetail },
    { path: '/technology/:id', component: technologyDetail },
    {
        path: '/',
        component: newsApi
    }
]
// export default [{
//         path: '/',
//         component: newsApi
//     },
//     {
//         path: '/business/:id',
//         component: businesDetil
//     }

// ]