import * as React from "react";
import {GlobalState} from "./Entities";
import {DispatchActions} from "./DispatchActions";
import {Text, TouchableHighlight, View} from 'react-native';

// const {
//     MKButton,
//     MKColor,
// } = require('react-native-material-kit');

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Counter extends React.Component<Props, {}> {

    render() {
        // const ColoredRaisedButton = MKButton.coloredButton()
        //     .withText('increment 3')
        //     .withOnPress(() => this.props.actions.increment(3))
        //     .build();
        //
        // const ColoredRaisedButton2 = MKButton.coloredButton()
        //     .withText('decrement 2')
        //     .withOnPress(() => this.props.actions.decrement(2))
        //     .build();

        return (
            <View style={{padding: 30}}>
                <Text>へろぅわーるど</Text>
                <Text>Score: {this.props.value.num}</Text>
                {/*<ColoredRaisedButton/>*/}
                {/*<ColoredRaisedButton2/>*/}
            </View>
        )
    }
}