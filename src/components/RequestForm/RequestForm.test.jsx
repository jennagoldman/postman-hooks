import React from 'react';
import { shallow } from 'enzyme';
import RequestForm from './RequestForm.jsx';

describe('RequestForm', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<RequestForm url="http://test.url" onUrlChange={() => {}} onRequestSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
