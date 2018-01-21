import { shallow } from 'enzyme';
import * as React from 'react';

import Pick from './pick';

const pickBeast = () => null;

describe('Pick', () => {
  it('renders without crashing', () => {
    shallow(<Pick pickBeast={pickBeast} />);
  });
});
