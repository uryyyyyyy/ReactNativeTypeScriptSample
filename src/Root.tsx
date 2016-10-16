import * as React from 'react';
import {logg} from './Logic';
import store from "./Store";
import {Provider, connect} from "react-redux";
import {Dispatch} from "redux";
import {DispatchActions} from "./home/DispatchActions";
import {Counter} from "./home/Counter";

const CounterComponent = connect(
    (store: any) => {return {value: store.counter}},
    (dispatch: Dispatch<any>) => {return {actions: new DispatchActions(dispatch)}}
)(Counter);

export class Root extends React.Component<{}, {}> {
    render() {
        logg();
        return (
            <Provider store={store}>
                <CounterComponent />
            </Provider>
        );
    }
}