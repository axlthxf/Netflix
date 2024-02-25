import { Link } from "react-router-dom"

function Button(props) {
    return (
        <Link to={props.to}  className=" flex gap-4">
            <button className={`text-white border rounded-lg border-red-500 h-10 w-20 hover:bg-black ${props.BG_COLOR}`}>{props.text}</button>
           
        </Link >
    )

}
export default Button