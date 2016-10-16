import * as React from "react";
import {GlobalState} from "./Entities";
import {DispatchActions} from "./DispatchActions";
import {Text, TouchableHighlight, View} from 'react-native';

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Counter extends React.Component<Props, {}> {

    render() {
        return (
            <View style={{padding: 30}}>
                <Text>へろぅわーるど</Text>
                <Text>Score: {this.props.value.num}</Text>

                <TouchableHighlight onPress={() => this.props.actions.increment(3)}>
                    <Text>increment 3</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.actions.decrement(2)}>
                    <Text>decrement 2</Text>
                </TouchableHighlight>
            </View>
        )
    }
}