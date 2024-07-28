import { CloseIcon } from "@/assets/CloseIcon"
import { FullSizeIcon } from "@/assets/FullSizeIcon"
import { ShareIcon } from "@/assets/ShareIcon"
import { StarIcon } from "@/assets/StarIcon"

interface DrawerHeaderProps {
    onClose: () => void;
}

export const DrawerHeader = ({ onClose }: DrawerHeaderProps) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <div className="cursor-pointer" onClick={onClose}><CloseIcon /></div>
                <div className="cursor-pointer"><FullSizeIcon /></div>
            </div>

            <div className="flex gap-4 items-center">
                <button className="bg-[#F4F4F4] rounded-[4px] p-2 flex items-center gap-2 text-[#797979] font-[400]">
                    Share
                    <ShareIcon />
                </button>

                <button className="bg-[#F4F4F4] rounded-[4px] p-2 flex items-center gap-2 text-[#797979] font-[400]">
                    Favorite
                    <StarIcon />
                </button>
            </div>
        </div>
    )
}
