import { shallow } from 'enzyme';
import * as React from 'react';

import Results from './results';

describe('Results', () => {
  it('renders without crashing', () => {
    shallow(
      <Results
        activeBeast="cat"
        beasts={[]}
        match={{ params: { offset: 0 } }}
      />,
    );
  });
});
