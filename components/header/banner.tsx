function Banner() {
    const title = "🎉 We've Launched! Check it out!🎉"

    return (
        <div className="w-full hidden sm:flex h-12 border-b">
            <div className="w-full overflow-ellipsis whitespace-nowrap my-auto text-center">
                <a href="/notification" className="transition-colors duration-200 hover:text-blue-600">
                    {title}
                </a>
            </div>
        </div>
    )
}

export { Banner }