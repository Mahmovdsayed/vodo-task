'use client'
import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

interface IProps {

}
const Header = ({ }: IProps) => {
    const { theme, setTheme } = useTheme();

    return <>
        <Navbar isBlurred isBordered>
            <NavbarBrand>
                <p className="font-bold text-inherit">VODO TASK</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <div className="space-x-2">
                        <Button
                            startContent={<SunIcon />}
                            size="sm"
                            isIconOnly
                            color="default"
                            radius="sm"
                            onClick={() => setTheme("light")}
                        >
                        </Button>
                        <Button
                            startContent={<MoonIcon />}
                            size="sm"
                            radius="sm"
                            isIconOnly
                            color="default"
                            onClick={() => setTheme("dark")}
                        >
                        </Button>
                    </div>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    </>;
};

export default Header;