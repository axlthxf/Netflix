import Button from "./Button"
function Header() {
    return (
        <div className="flex justify-between items-center w-full ">
            <img src="/asset/netflix.png" className="w-24" />
            <div className="flex gap-4 items-center">
            <select name="language" id="lang" className="border border-red-600 border-4 rounded-lg w-18 h-12">
                <option value="language">English</option>
                <option value="language">Hindi</option>
                <option value="language">Malyalam</option>
            </select>
            <Button text="sign up"/>
            <Button text="sign in"/>
         
        </div>
        </div>
    )

}
export default Header