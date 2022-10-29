import { useState } from "react"
import BottomSheetWatchingItem from "./BottomSheetWatchingItem"

const WatchingItem = ({ imgUrl }) => {
    const [isShowAction, setIsShowAction] = useState(false)

    return (
        <div className="h-56 w-32">
            <div style={{ backgroundImage: `url(${imgUrl})` }} className="h-44 flex justify-center items-center">
                <button>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32.5" cy="32.5" r="31.5" fill="black" fillOpacity="0.6" stroke="white" strokeWidth="2" />
                        <path d="M42.4323 33.8585L24.4803 43.6894C23.8139 44.0543 23 43.5721 23 42.8123V22.7232C23 21.9554 23.8295 21.474 24.4961 21.8549L42.4481 32.1132C43.1269 32.5011 43.118 33.483 42.4323 33.8585Z" fill="white" />
                    </svg>
                </button>
            </div>
            <div className="h-12 bg-eerie-black flex items-center justify-between pl-3 pr-4 border-t-2 border-red-600">
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
                        <rect x="10.4349" y="5.21737" width="3.13043" height="3.13043" fill="white" />
                        <rect x="10.4349" y="9.39128" width="3.13043" height="9.3913" fill="white" />
                    </svg>
                </button>
                <button onClick={() => setIsShowAction(true)}>
                    <svg width="5" height="21" viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
                        <circle cx="2.5" cy="10.5" r="2.5" fill="white" />
                        <circle cx="2.5" cy="18.5" r="2.5" fill="white" />
                    </svg>
                </button>
            </div>
            <BottomSheetWatchingItem isShow={isShowAction} setIsShow={setIsShowAction} />
        </div >
    )
}

export default WatchingItem