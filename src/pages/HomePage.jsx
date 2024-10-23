import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";

export function HomePage() {
    return (
        <div className="h-screen bg-neutral-800">
            <Navbar.Bar>
                <Navbar.Item>
                    <a href="#">Inicio</a>
                </Navbar.Item>
                <Navbar.Item>
                    <Button.Root>
                        <Button.Content className={"bg-gradient-to-r from-[#FFC107] to-[#FFAB00] py-2 px-10 rounded-md shadow-[0_0_4px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.8)] hover:scale-105 transform transition-transform duration-300 ease-in-out"} >
                            Jogar
                        </Button.Content>
                    </Button.Root>
                </Navbar.Item>
                <Navbar.Item>
                    Suporte
                </Navbar.Item>
            </Navbar.Bar>
        </div>
    )
}