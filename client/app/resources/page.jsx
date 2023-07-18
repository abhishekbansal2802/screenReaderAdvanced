import { AddIconSVG } from "../icons";

export default function Page() {
    return <>

        <div className="h-full w-full flex justify-center items-center">
            <div className="flex gap-5 w-1/2">
                <div className="bg-white shadow p-4 w-1/3 flex flex-col gap-5">
                    <div className="text-2xl font-medium text-gray-700">
                        Resources PDF
                    </div>
                    <div className="w-full aspect-square border border-dashed flex justify-center items-center">
                        <span className="scale-50 fill-gray-700">
                            {
                                AddIconSVG
                            }
                        </span>
                    </div>
                </div>
                <div className="bg-white shadow p-4 w-1/3 flex flex-col gap-5">
                    <div className="text-2xl font-medium text-gray-700">
                        Resources PPTX
                    </div>
                    <div className="w-full aspect-square border border-dashed flex justify-center items-center">
                        <span className="scale-50 fill-gray-700">
                            {
                                AddIconSVG
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </>
}