import { Outlet } from "react-router-dom"

const Root = () => (
    <div>
        Root Text
        {/* <div>Text from Root!</div> */}
        <Outlet />
    </div>
)
    
export default Root