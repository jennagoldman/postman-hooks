import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response.jsx';

describe('Response', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Response response={''} />);
    expect(wrapper).toMatchSnapshot();
  });
});
