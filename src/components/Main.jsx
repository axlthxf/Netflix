function Main({data,index}) {

    

    return (
        <div className="flex gap-8 bg-opacity-50 bg-black w-full justify-center items-center h-screen border border-slate-600 border-4 ">
            <div className="flex flex-col  gap-4 px-12 ">
                <p>{index}</p>
                <h1 className="text-white font-extrabold text-5xl">{data.Heading}</h1>
                <h1 className="text-white font-extrabold text-5xl">{data.para}</h1>
            </div>
            <div>
            </div>
            <video
                autoPlay
                loop
                muted
                className=" h-[140px] md:h-[300px] w-max rounded-xl px-3 py-2 bg-gray-600"
            >
                <source src={data.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>

    )

}
export default Main