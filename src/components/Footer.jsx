function Footer() {
    return (
        <div className="flex flex-col justify-center items-center bg-black">
            <img src="/asset/netflix.png" className="w-40" />
            <h1 className=" text-slate-400 text-sm hover:text-red-600 pb-4 ">Questions? Call <span className="underline underline-offset-1">000-800-919-1694</span></h1>
            <div className="grid grid-cols-3 bg-black gap-12  ">
                <p className="text-slate-400 text-sm underline underline-offset-1 hover:text-red-600">Only on Netflix</p>
                <p className="text-slate-400 text-sm underline underline-offset-1 hover:text-red-600">FAQ</p>
                <p className="text-slate-400 text-sm underline underline-offset-1 hover:text-red-600">Help centre</p>
                <p className="text-slate-400 text-sm underline underline-offset-1 hover:text-red-600">Jobs</p>
                <p className="text-slate-400 text-sm underline underline-offset-1 hover:text-red-600">Cookie prefernces</p>
                <p className="text-slate-400 text-sm underline underline-offset-1 hover:text-red-600">Privacy</p>
            </div>
        </div>
    )

}
export default Footer