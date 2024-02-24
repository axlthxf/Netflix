function Button(props) {
    return (
        <div className=" flex gap-4">
            <button className="text-white border rounded-lg border-red-500 bg-red-800 p-2 w-20 h-12 hover:bg-black">{props.text}</button>

           
        </div>
    )

}
export default Button