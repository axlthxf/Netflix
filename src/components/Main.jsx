function Main(params) {
    return (
        <div className="flex gap-8 bg-black w-full justify-center items-center h-screen border border-slate-600 border-4 ">
            <div className="flex flex-col  gap-4 px-12 ">
                <h1 className="text-white font-extrabold text-5xl">Enjoy on your TV</h1>
                <h1 className="text-white font-lg text-xl">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h1>
            </div>
            <video
                autoPlay
                loop
                muted
                className=" h-[140px] md:h-[300px] w-full rounded-xl"
            >
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>

    )

}
export default Main