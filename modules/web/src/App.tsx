import React from 'react';
import { Button, Header } from '@stub/components';

function App() {
  return (
    <div>
      <header>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
          <Button label="click" primary />
          <Header user={{ sth: 'sth' }} onLogin={() => 0} onLogout={() => 0} onCreateAccount={() => 0} />
        </p>
      </header>
    </div>
  );
}

export default App;
