import { advertiseInfoData } from "@/utils/constants/advertiseInfo"

export const Advertisement = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-3">
        {
            advertiseInfoData.map((item) => {
                return (
                    <div key={item.id}
                        className="flex gap-4 items-center bg-white p-4 rounded-lg"
                    >
                        <div>
                            <item.icon />
                        </div>

                        <div>
                            <p className="text-[#757575] font-semibold">{item.title}</p>
                            <p className="text-[#868686] text-sm">{item.description}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
