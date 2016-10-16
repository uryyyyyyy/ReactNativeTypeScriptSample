import * as React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import {Counter} from '../Counter';
import { expect } from 'chai';
import {GlobalState} from "../Entities";
import {DispatchActions} from "../DispatchActions";

describe('<Counter />', () => {
    it('should render stuff', () => {
        const value: GlobalState = {num: 1};
        const actions: DispatchActions = null;

        const wrapper = shallow(<Counter value={value} actions={actions} />);
        expect(wrapper.length).to.equal(1);
        console.log(wrapper.childAt(0));
        console.log(wrapper.childAt(1));
        expect(wrapper.contains(<Text>へろぅわーるど</Text>)).to.equal(true);
    });
});