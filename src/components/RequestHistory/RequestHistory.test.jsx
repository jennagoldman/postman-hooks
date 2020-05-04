import React from 'react';
import { shallow } from 'enzyme';
import RequestHistory from './RequestHistory.jsx';

describe('RequestHistory', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<RequestHistory history={[]} onReset={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
