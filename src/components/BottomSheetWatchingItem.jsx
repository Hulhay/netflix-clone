import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { HiDownload } from 'react-icons/hi'
import { SlDislike, SlLike } from 'react-icons/sl'

const BottomSheetWatchingItem = ({ isShow, setIsShow }) => {

    return (
        <div className={`bg-eerie-black text-white fixed bottom-0 left-0 w-full rounded-t-xl p-3 ${isShow ? '' : 'hidden'}`}>
            <div className='flex justify-between'>
                <p className='font-semibold text-lg'>The Rain</p>
                <button
                    className='flex items-center justify-center bg-black-olive rounded-full w-7 h-7'
                    onClick={() => setIsShow(false)}
                >
                    <IoMdClose className='text-2xl' />
                </button>
            </div>
            <div>
                <ul>
                    <li className='flex items-center py-2'>
                        <AiOutlineInfoCircle className='text-xl' />
                        <p className='pl-4'>Episode & Information</p>
                    </li>
                    <li className='flex items-center py-2'>
                        <HiDownload className='text-xl' />
                        <p className='pl-4'>Download</p>
                    </li>
                    <li className='flex items-center py-2'>
                        <SlDislike className='text-xl' />
                        <p className='pl-4'>Not for me</p>
                    </li>
                    <li className='flex items-center py-2'>
                        <SlLike className='text-xl' />
                        <p className='pl-4'>I like it</p>
                    </li>
                    <li className='flex items-center py-2'>
                        <IoMdClose className='text-xl' />
                        <p className='pl-4'>Remove from my list</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BottomSheetWatchingItem