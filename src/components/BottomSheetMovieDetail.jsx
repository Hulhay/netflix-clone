import { IoMdClose, IoMdPlay } from 'react-icons/io'
import { HiDownload } from 'react-icons/hi'
import { MdNavigateNext } from 'react-icons/md'
import { AiOutlineInfoCircle, AiOutlineShareAlt, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

const BottomSheetMovieDetail = ({ isShow, setIsShow }) => {

    return (
        <div className={`bg-eerie-black text-white fixed bottom-0 left-0 w-full rounded-t-xl p-3 ${isShow ? 'transition duration-300' : 'transition translate-y-full duration-300'}`}>
            <div className='flex'>
                <img src="https://picsum.photos/200/300" alt="" className='pr-3 h-32' />
                <div>
                    <div className='flex justify-between'>
                        <div className='w-full'>
                            <p className='font-semibold text-xl line-clamp-2'>Spongebob Squarepants Holiday Special</p>
                            <ul className='flex w-3/5 justify-between text-quartz text-xs'>
                                <li>2021</li>
                                <li>18+</li>
                                <li>1h 53m</li>
                            </ul>
                        </div>
                        <button
                            className='flex items-center justify-center bg-black-olive rounded-full w-7 h-7'
                            onClick={() => setIsShow(false)}
                        >
                            <IoMdClose className='text-2xl' />
                        </button>
                    </div>
                    <div>
                        <p className='text-xs line-clamp-4 pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium porro tempore delectus, enim necessitatibus numquam sint vel sapiente exercitationem. Aliquam maiores ullam expedita repudiandae corrupti accusamus fugiat adipisci quae odit. </p>
                    </div>
                </div>
            </div>
            <div className='py-3'>
                <ul className='flex justify-evenly'>
                    <li className='flex flex-col items-center'>
                        <div className='flex items-center justify-center bg-white rounded-full w-7 h-7'>
                            <IoMdPlay className='text-eerie-black' />
                        </div>
                        <p className='text-xs text-quartz'>Play</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='flex items-center justify-center bg-black-olive rounded-full w-7 h-7'>
                            <HiDownload />
                        </div>
                        <p className='text-xs text-quartz'>Download</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='flex items-center justify-center bg-black-olive rounded-full w-7 h-7'>
                            <AiOutlinePlus />
                        </div>
                        <p className='text-xs text-quartz'>My List</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='flex items-center justify-center bg-black-olive rounded-full w-7 h-7'>
                            <AiOutlineShareAlt />
                        </div>
                        <p className='text-xs text-quartz'>Share</p>
                    </li>
                </ul>
            </div>
            <div className='flex justify-between border-t-[1px] border-black-olive pt-3'>
                <div className='flex items-center'>
                    <AiOutlineInfoCircle className='text-xl' />
                    <p className='pl-4'>More</p>
                </div>
                <div>
                    <MdNavigateNext className='text-white text-2xl' />
                </div>
            </div>
        </div>
    )
}

export default BottomSheetMovieDetail