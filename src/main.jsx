// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import Dashboord from './page/dashboord/Dashboord';
import Team from './page/team/Team';
import Bar from './page/bar/BarChart';
import Calendar from './page/calendar/calendar';
import Contacts from './page/contacts/contacts';
import Faq from './page/faq/faq';
import Form from './page/form/form';
import Geography from './page/geography/geography';
import Invoices from './page/invoices/invoices';
import Line from './page/line/lineChart';
import Pie from './page/pie/pieChart';
import Task from './page/new-form/Task';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboord />} />
      <Route path='team' element={<Team />} />
      <Route path='bar' element={<Bar />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='Faq' element={<Faq />} />
      <Route path='Form' element={<Form />} />
      <Route path='Geography' element={<Geography />} />
      <Route path='Invoices' element={<Invoices />} />
      <Route path='Line' element={<Line />} />
      <Route path='Pie' element={<Pie />} />
      <Route path='Pie' element={<Pie />} />
      <Route path='Task' element={<Task />} />
      
     
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
