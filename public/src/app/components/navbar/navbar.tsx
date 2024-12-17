import React from 'react';
import NavbarButton from "@/app/components/navbarbutton/navbarbutton";

const Navbar = () => {
    const menuOptions = [
        { title: "Documente", link: "/management-documente" },
        { title: "Settings", link: "/settings" },
        { title: "Logout", link: "/logout" },
    ];

    return (
        <div className="p-4 border-b-[#E5E7EB] border-solid border-b flex fixed bg-white w-full items-center">
            <div>
                <a href="/">
                    <img
                        src="/websiteUI/logo.png"
                        alt="Logo"
                        className="min-w-10 w-4 p-0 z-20 mr-5 -mb-2"
                        style={{ imageRendering: 'crisp-edges' }}
                    />

                </a>
            </div>
            <div className="hidden lg:block">
                <NavbarButton title="PREZENTARE" link="/prezentare" />
                <NavbarButton title="MANAGEMENT" options={menuOptions} />
                <NavbarButton title="ELEVI" options={menuOptions} />
                <NavbarButton title="PROFESORI" options={menuOptions} />
                <NavbarButton title="EXAMENE" link="/management-documente" />
                <NavbarButton title="PROIECTE" link="/management-documente" />
                <NavbarButton title="CONTACT" link="/contact" />
            </div>
            <div className="flex lg:hidden mr-0 ml-auto">
                <button className="justify-end mr-0 ml-auto"><img src="/websiteUI/burger-menu-icon.svg" alt="BurgerIcon"/></button>
            </div>
        </div>
    );
};

export default Navbar;
