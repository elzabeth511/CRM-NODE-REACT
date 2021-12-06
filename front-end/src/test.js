//import App from "./App";
import { AdminApp } from "./components/admin/adminApp";
import CustomerApp from "./components/customer/customerApp";

import { ManagerApp } from "./components/manger/mangerApp";

export function Test(){
    return(<>
   {!localStorage.getItem('mytoken') && <CustomerApp/>}
   {localStorage.getItem('mytoken') && localStorage.getItem(`role`)=== '1' &&<AdminApp/>}
   {localStorage.getItem('mytoken') && localStorage.getItem(`role`)=== '2' &&<ManagerApp/>}


    </>)
}