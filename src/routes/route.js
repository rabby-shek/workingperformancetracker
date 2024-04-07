import AddRecord from "../pages/add-record/AddRecord";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Login from "../pages/login/Login";
import Performance from "../pages/performance/Performance";
export const routingElements = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/performance",
    element: <Performance />,
  },
  {
    id:3,
    path:"/record-list",
    element: <List />
  },
  {
    id:3,
    path:"/add-record",
    element: <AddRecord />
  },
 
  
];

export const outAppRoutes = [
  {
    id: 1,
    path: "/login",
    element: <Login />,
  },
]
