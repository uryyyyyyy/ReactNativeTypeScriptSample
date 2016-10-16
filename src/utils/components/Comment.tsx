import * as React from "react";
import {View, Text} from 'react-native';

interface Props {
    author: string;
}

export class Comment extends React.Component<Props, {}> {
    render() {
        return(
            <View>
                <Text>
                    {this.props.author}
                </Text>
            </View>
        );
    }
}