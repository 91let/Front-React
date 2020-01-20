import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import Home from './components/Home';
import Foo from './components/Foo';
import Bar from './components/Bar';
import './assets/css/App.css';
import './assets/css/components.scss'

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <div className="Header">
            search
          </div>
          <div className="Contents">
            <h1>This is Main Page</h1>
                      <div className="wrap components-page">
                <div className="wrapB">

                    <h1>Style Component</h1>

                    <h2>form</h2>
                    <div className="wrap">
                        {/* <!-- input type=text --> */}
                        {/* <!-- input type=password --> */}
                        {/* <!-- textarea --> */}
                        {/* <!-- form --> */}
                    </div>

                    <h2>switch</h2>
                    <div className="wrap">
                    </div>

                    <h2>button</h2>
                    <div className="wrap">
                        {/* <!-- button --> */}
                    </div>

                    <h2>header</h2>
                    <div className="wrap">
                        {/* <!-- header --> */}
                    </div>

                    <h2>tab</h2>
                    <div className="wrap">
                        {/* <!-- tab --> */}
                    </div>

                    <h2>keyword</h2>
                    <div className="wrap">
                        {/* <!-- keyword --> */}
                    </div>

                    <h2>curation</h2>
                    <div className="wrap">
                        {/* <!-- curation --> */}
                    </div>

                    <h2>toast</h2>
                    <div className="wrap">
                        {/* <!-- toast --> */}
                    </div>

                </div>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/foo" component={Foo} />
              <Route exact path="/bar" component={Bar} />
            </Switch>
          </div>
          <div className="Footer">
            <table className="MenuTable">
              <tr>
                <td>
                  <Link to="/">Home</Link>
                </td>
                <td>
                  <Link to="/foo">Foo</Link>
                </td>
                <td>
                  <Link to="/bar">Bar</Link>
                </td>
              </tr>
            </table>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
