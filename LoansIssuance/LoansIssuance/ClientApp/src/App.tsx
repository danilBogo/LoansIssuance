import * as React from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {CreditForm} from './components/CreditForm';
import {FetchData} from './components/FetchData';
import {Counter} from './components/Counter';

import './custom.css'

export function App() {
    return (
        <Layout>
            <Route exact path='/' component={Home}/>
            <Route path='/pageCredit' component={CreditForm}/>
            <Route path='/counter' component={Counter}/>
            <Route path='/fetch-data' component={FetchData}/>
        </Layout>
    )
}