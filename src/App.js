import {Route, Switch} from 'react-router-dom'
import {Homepage} from "./Components."
import {MedList} from "./DataResults"
import {FitBit} from "./DataResults"
import {SugarTracker} from "./DataResults"
import {RecipePages} from "./DataResults"

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="bit" component={FitBit}/>
            <Route exact path="sugar" component={SugarTracker}/>
            <Route exact path="medication" component={MedList}/>
            <Route exact path="recipes" component={RecipePages}/>
        </Switch>

    );
}

export  default  App;