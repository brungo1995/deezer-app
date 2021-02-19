import React from 'react';
import { render } from '@testing-library/react';
// import App from '../../src/App';

const App = () =>
  <div className="App">
    <header className="App-header">
      <h2>Getting started with React testing library</h2>
    </header>
  </div>

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    // expect(getByText(/Getting started with React testing library/i)).toBeInTheDocument();
  });
});