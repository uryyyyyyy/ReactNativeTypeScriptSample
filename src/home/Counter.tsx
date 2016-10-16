import * as React from "react";
import {GlobalState} from "./Entities";
import {DispatchActions} from "./DispatchActions";
import {Text, View} from 'react-native';
const {Button} = require('react-native-elements');

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Counter extends React.Component<Props, {}> {

    render() {
        return (
            <View style={{padding: 30}}>
                <Text>へろぅわーるど</Text>
                <Text>{this.props.value.num}</Text>
                <Button
                    raised
                    backgroundColor="#673AB7"
                    icon={{name: 'add'}}
                    onPress={() => this.props.actions.increment(3)}
                    title='increment 3' />
                <Button
                    raised
                    backgroundColor="#673AB7"
                    icon={{name: 'remove'}}
                    onPress={() => this.props.actions.decrement(2)}
                    title='decrement 2' />
            </View>
        )
    }
}