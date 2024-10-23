import backgroundImage from "../assets/background.jpeg";
import logo from "../assets/logo.png";
import backgroundPattern from "../assets/bg-pattern.svg";
import pokeballImage from "../assets/pokeball.png";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();

    return (
        <div
            className="h-screen"
            style={{
                background: "linear-gradient(180deg, #0C031E 0%, #53058D 66%, #9E15A7 83%, #C703C7 91%, #FE2AC8 100%)"
            }}
        >
            <img src={backgroundPattern} alt="pattern" className="absolute w-screen h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute w-2 h-2 bg-white rounded-full blur-sm top-[10%] left-[30%] animate-pulse" />
                <div className="absolute w-2 h-2 bg-white rounded-full blur-sm top-[5%] left-[85%] animate-pulse" />
                <div className="absolute w-2 h-2 bg-white rounded-full blur-sm top-[40%] left-[50%] animate-pulse" />
                <div className="absolute w-2 h-2 bg-white rounded-full blur-sm top-[55%] left-[85%] animate-pulse" />
                <div className="absolute w-2 h-2 bg-white rounded-full blur-sm top-[15%] right-[30%] animate-pulse" />
                <div className="absolute w-2 h-2 bg-white rounded-full blur-sm top-[50%] right-[85%] animate-pulse" />
                <div className="absolute w-2 h-2 bg-white rounded-full blur-sm top-[95%] right-[85%] animate-pulse" />
            </div>

            <main className="h-screen flex items-center justify-center">
                <div className="relative w-full max-w-4xl flex bg-[#050018] bg-opacity-30 p-6 space-x-12 rounded-3xl">
                    <div className="w-1/2">
                        <img
                            src={backgroundImage}
                            alt="background"
                            className="rounded-xl w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <h1 className="text-center font-semibold text-3xl text-white font-silkscreen">
                            BEM-VINDO AO
                        </h1>
                        <img
                            src={logo}
                            alt="logo"
                            className="rounded-xl w-full h-auto"
                        />
                        <form className="flex flex-col space-y-4 w-full">
                            <Input.Root className={"w-full"}>
                                <Input.Content className={"w-full bg-[#550392] rounded-lg border-2 border-[#2F084D] placeholder-white placeholder-opacity-70 text-white outline-none p-2 shadow-[0px_8px_0_rgba(0,0,0,0.5),0px_0px_0_#2F084D]"} placeholder={"Email"} />
                            </Input.Root>
                            <Input.Root className={"w-full pb-2"}>
                                <Input.Content className={"w-full bg-[#550392] rounded-lg border-2 border-[#2F084D] placeholder-white placeholder-opacity-70 text-white outline-none p-2 shadow-[0px_8px_0_rgba(0,0,0,0.5),0px_0px_0_#2F084D]"} placeholder={"Senha"} />
                            </Input.Root>
                            <Button.Root>
                                <Button.Content onClick={() => navigate("/home")} className={"w-full bg-[#7525B2] rounded-lg border-2 border-[#2F084D] shadow-[0px_8px_0_rgba(0,0,0,0.5),0px_0px_0_#2F084D] active:border-[#7525B2] active:shadow-none transition-transform transform hover:scale-105 active:scale-95 "}>
                                    <div className="flex flex-row p-2 text-white items-center justify-center space-x-4">
                                        <p className="text-lg font-silkscreen">Jogar</p>
                                        <img src={pokeballImage} alt="pokeball" className="w-8 h-8 animate-pulse"></img>
                                    </div>
                                </Button.Content>
                            </Button.Root>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
