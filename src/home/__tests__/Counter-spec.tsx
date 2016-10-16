import * as React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import {Counter} from '../Counter';
import { expect, assert} from 'chai';
import {GlobalState} from "../Entities";
import {DispatchActions} from "../DispatchActions";


describe('<Counter />', () => {
    it('should render stuff', () => {
        const value: GlobalState = {num: 1};
        const actions: DispatchActions = new DispatchActions((obj) => console.log(obj));

        const wrapper = shallow(<Counter value={value} actions={actions} />);
        expect(wrapper.contains(<Text>へろぅわーるど</Text>)).to.equal(true);
    });

    it('action test', (done) => {
        const value: GlobalState = {num: 1};
        const actions: any = {increment: (num: number) => {
            assert.deepEqual(num, 3);
            done()
        }};

        const wrapper = shallow(<Counter value={value} actions={actions} />);
        expect(wrapper.length).to.equal(1);
        wrapper.find("Button").first().simulate('press');
    });
});