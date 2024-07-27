"use client"
import { AddIcon } from '@/assets/AddIcon'
import { AutomationIcon } from '@/assets/AutomationIcon'
import { CalenderIcon } from '@/assets/CalenderIcon'
import { FilterIcon } from '@/assets/FilterIcon'
import { SearchIcon } from '@/assets/SearchIcon'
import { ShareIcon } from '@/assets/ShareIcon'
import { Input } from '@/components/shared/Input'

export const Header = () => {
  return (
    <div className="flex justify-between items-center my-4">
        <div>
            <div className='relative'>
                <Input 
                    placeholder='Search'
                    sx={{
                        '& .MuiInputBase-input': {  
                            backgroundColor: 'white'
                        }  
                    }}      
                />
                <div className='absolute right-3 top-3 cursor-pointer'>
                    <SearchIcon />
                </div>
            </div>
        </div>

        <div className='flex items-center gap-7'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <p className='text-[#797979]'>Calendar view</p>
                <CalenderIcon />
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
                <p className='text-[#797979]'>Automation</p>
                <AutomationIcon />
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
                <p className='text-[#797979]'>Filter</p>
                <FilterIcon />
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
                <p className='text-[#797979]'>Share</p>
                <ShareIcon />
            </div>

            <div>
                <button className='create-task-btn text-white px-[10px] py-[6px] flex items-center justify-center w-full text-lg gap-2 font-semibold rounded-lg'>
                    Create new
                    <AddIcon />
                </button>
            </div>
        </div>
    </div>
  )
}
