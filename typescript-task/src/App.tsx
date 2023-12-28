import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility}>My Alert</Alert>
        )}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          My Button
        </Button>
      </div>
    </>
  );
};

export default App;
