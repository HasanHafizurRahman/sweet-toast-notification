import { createRoot } from 'react-dom';
import SweetAlert from './SweetAlert';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SweetAlert
      title="Hello!"
      text="This is a sweet alert"
      icon="success"
      onClose={() => {}}
    />
  </React.StrictMode>
);

