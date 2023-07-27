
const HamburgerIcon = () => {
    return(
        <div className="flex flex-col gap-y-2.5 w-1/12 h-1/12 relative cursor-pointer">
            <span className="top-1/4 w-1/2 h-1 bg-zellige-900 left-1/2 rounded-3xl"/>
            <span className="top-1/2 w-1/2 h-1 bg-zellige-900 left-1/2 rounded-3xl"/>
            <span className="top-3/4 w-1/2 h-1 bg-zellige-900 left-1/2 rounded-3xl"/>
        </div>
    )
}

export default HamburgerIcon;