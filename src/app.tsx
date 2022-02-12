import ReactDOM from "react-dom";
import React from "react";
import Fake from "src/sub_module/fake";
import { MY_ENV_VARIABLE } from "env";

const App = () => {
    return (
        <h1>
            This is my React app!
            {MY_ENV_VARIABLE}
            <Fake />
        </h1>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
