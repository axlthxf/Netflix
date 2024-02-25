import { Link } from "react-router-dom"
import Button from "./Button"

function Header() {
    return (
        <div className="flex justify-between items-center w-full px-2 ">
           <Link to="/">
             <img src="/asset/netflix.png" className="w-24" />
           </Link>
            <div className="flex gap-4 items-center">
            <select name="language" id="lang" className="text-white border border-red-600 border-4 bg-orange-900 rounded-lg w-18 h-12">
                <option value="language">English</option>
                <option value="language">Hindi</option>
                <option value="language">Malyalam</option>
            </select>
            <Button BG_COLOR="bg-red-700" to="/signup" text="sign up"/>
            <Button BG_COLOR="bg-red-700" to="/signin" text="sign in"/>
         
        </div>
        </div>
    )

}
export default Header