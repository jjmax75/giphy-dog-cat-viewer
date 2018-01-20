import { shallow } from 'enzyme';
import * as React from 'react';

import Pick from './pick';

describe('Pick', () => {
  it('renders without crashing', () => {
    shallow(<Pick />);
  });
});
