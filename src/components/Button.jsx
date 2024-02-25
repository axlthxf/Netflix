import { Link } from "react-router-dom"

function Button(props) {
    return (
        <Link to={props.to}  className=" flex gap-4">
            <button className={`text-white border rounded-lg border-red-500  p-2 h-12 hover:bg-black ${props.BG_COLOR}`}>{props.text}</button>
           
        </Link >
    )

}
export default Button