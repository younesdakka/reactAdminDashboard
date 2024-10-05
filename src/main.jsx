import './index.css'
import { RouterProvider,} from "react-router-dom";
import ReactDOM from 'react-dom';
import React from 'react';
import routes from './routes'; 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={routes} />
</React.StrictMode>
)
