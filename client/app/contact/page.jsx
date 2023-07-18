export default function Page() {
    return <>

        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-white w-1/2 p-4 flex flex-col gap-5">
                <div>
                    <div className="text-lg font-medium text-gray-600">
                        Contact Us
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                        Your Feedback Matters
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-sm text-gray-400">Full Name</label>
                            <input type="text" id="username" className="bg-gray-50 border border-slate-300 w-full h-12 px-2 py-1 outline-none" />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-400" htmlFor="email">Email</label>
                            <input type="text" id="email" className="bg-gray-50 border border-slate-300 w-full h-12 px-2 py-1 outline-none" />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="feedback" className="text-sm text-gray-400">Feedback</label>
                            <textarea type="text" id="feedback" className="bg-gray-50 resize-none h-24 border border-slate-300 w-full px-2 py-1 outline-none" />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="w-full h-12 px-2 py-1 bg-slate-600 border border-slate-600 text-white hover:bg-white hover:text-slate-600 transition duration-150">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>

    </>
}