import type { JSX } from 'solid-js';
import Navbar from './Navbar';

const App = (props: { children?: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <main>
        {props.children}
      </main>
    </>
  );
};

export default App;
