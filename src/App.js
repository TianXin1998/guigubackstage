/*
 * @Author: 田鑫
 * @Date: 2021-02-13 15:14:56
 * @LastEditTime: 2021-02-13 17:42:11
 */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
        </Switch>
      </div>
    )
  }
}
