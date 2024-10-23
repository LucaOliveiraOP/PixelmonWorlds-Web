import logo from "../../assets/logo.png"
import pikachuGif from "../../assets/pikachu.gif"

export function Bar({ children }) {
    return (
        <nav className="bg-gradient-to-r from-[#4B1F1F] to-[#6A2C2C] relative overflow-hidden">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <img src={logo} alt="logo" className="w-auto h-20 z-10" />
                <div id="navbar-default" className="relative z-10">
                    <ul className="font-medium flex flex-row space-x-8 items-center text-white">
                        {children}
                    </ul>
                </div>
                <img
                    src={pikachuGif}
                    alt="pikachu"
                    className="absolute w-auto h-12 bottom-0 animate-movePikachu z-0"
                />
            </div>
        </nav>
    )
}