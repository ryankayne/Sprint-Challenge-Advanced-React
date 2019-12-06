import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import { render } from '@testing-library/react';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('testing testing testing', () => {
  const divtest = rtl.render(
    <div className="testing">TESTING...</div>
  );
  const element = divtest.queryByText(/testing/i);
})

test('contains player', () => {
  const { findByText } = render(<App />);
  findByText(/Rapinoe/i);
})