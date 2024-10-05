// router.js
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Dashboord from "./page/dashboord/Dashboord";
import Team from "./page/team/Team";
import Bar from "./page/bar/BarChart";
import Calendar from "./page/calendar/calendar";
import Contacts from "./page/contacts/contacts";
import Faq from "./page/faq/faq";
import Form from "./page/form/form";
import Geography from "./page/geography/geography";
import Invoices from "./page/invoices/invoices";
import Line from "./page/line/lineChart";
import Pie from "./page/pie/pieChart";
import Login from "./page/auth/Login";
import Signup from "./page/auth/Signup";
import Categories from "./page/categories/Categories";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="categories" element={<Categories />} />
      <Route path="dashboord" element={<Dashboord />} />
      <Route path="team" element={<Team />} />
      <Route path="bar" element={<Bar />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="faq" element={<Faq />} />
      <Route path="form" element={<Form />} />
      <Route path="geography" element={<Geography />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="line" element={<Line />} />
      <Route path="pie" element={<Pie />} />
    </Route>
  )
);

export default routes;
