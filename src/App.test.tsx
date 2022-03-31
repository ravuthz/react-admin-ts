/* eslint-disable testing-library/await-async-query */
import {create, act} from 'react-test-renderer';

import App from './App';

test('renders learn react link', () => {
  let testRenderer: any;

  act(() => {
    testRenderer = create(<App value={1}/>);
  });

  // console.log(root.toJSON());
  // expect(testRenderer.toJSON()).toMatchSnapshot();

  act(() => {
    testRenderer.update(<App value={2}/>);
  })

  // console.log(root.toJSON());
  // expect(testRenderer.toJSON()).toMatchSnapshot();
  expect(testRenderer.root.findByProps({className: "App-link"}).children).toBeInTheDocument();
  expect(testRenderer.root.findByProps({className: "App-link"}).children).toEqual(['Learn React 18']);
});
