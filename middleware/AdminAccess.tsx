import {usePathname} from "next/navigation"
const AdminAccess =()=>{
  const name = "victor"
  const ifLoggedIn = name == "victor"

  return (
    <div>
       {children}
    </div>

    )
export default AdminAccess