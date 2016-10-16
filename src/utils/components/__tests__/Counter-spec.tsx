import * as React from "react";
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import {Comment} from '../Comment';
import { expect, assert} from 'chai';


describe('<Comment />', () => {
    it('should render the given author name', () => {
        const wrapper = shallow(<Comment author="Author" />);

        expect(wrapper.contains(<Text>Author</Text>)).to.equal(true);
    });
});