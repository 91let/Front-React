import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../components/Main"
import Lists from "../components/Lists"
import './router.css'

class MyRouter extends React.Component {
    render(){
        return(
            <div className="Pages">
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/Lists" component={Lists} />
                </Switch>
            </div>
        )
    }
}

export default MyRouter;