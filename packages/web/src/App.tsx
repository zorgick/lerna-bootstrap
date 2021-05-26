import React from 'react';
import { Button, Header } from '@modules/components';

function App() {
  return (
    <div>
      <header>
        <Header onLogin={() => 0} onLogout={() => 0} onCreateAccount={() => 0} />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
          <Button>
            click
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
