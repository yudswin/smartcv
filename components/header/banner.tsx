import { X } from 'lucide-react'
import { useState } from 'react'

function Banner() {
    const title = "🎉 We've Launched! Check it out!🎉"
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) {
        return null
    }

    return (
        <div className="w-full hidden sm:flex h-12 border-b relative">
            <div className="w-full overflow-ellipsis whitespace-nowrap my-auto text-center">
                <a href="/notification" className="transition-colors duration-200 hover:text-blue-600">
                    {title}
                </a>
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="Close banner"
            >
                <X />
            </button>
        </div>
    )
}

export { Banner }