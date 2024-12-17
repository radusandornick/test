'use client';

import React from "react";
import Link from "next/link";

const NavbarButton = ({ title, options, link  }) => {

    if (link) {
        return (
            <div className="inline-block">
                <Link href={link} passHref>
                    <button className="text-black px-2 py-0.5 rounded-md hover:bg-gray-200 flex items-center font-bold text-xl">
                        {title}
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="relative inline-block group">
            <button className="text-black px-2 py-0.5 rounded-md hover:bg-gray-200 flex items-center font-bold text-xl">
                {title}

            </button>

            <div className="absolute left-0 w-48 bg-white border border-gray-300 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hidden">
                <ul className="py-1">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            <Link href={option.link} className="block">
                                {option.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavbarButton;
