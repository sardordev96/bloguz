import { AdminFooter } from "../../components/adminFooter"
import { AdminNavbar } from "../../components/adminNavbar"

export const Admin = () => {
  return (
   <div className="admin">
    <div className="container">
      <div className="admin-inner">
      </div>
    </div>
        <AdminNavbar/>
        <AdminFooter/>
   </div>
  )
}
