'use client'

import { useState } from 'react';

const NewsBox = ({ newsItems }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage * itemsPerPage < newsItems.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="self-center pt-16 lg:pt-32 space-y-10">
            {currentItems.map((item, index) => (
                <a href={item.link} key={index} className="flex flex-col shadow-2xl rounded-tl-md rounded-bl-md rounded-b-md rounded-tr-md lg:rounded-br-md w-[95vw] lg:min-h-0 lg:w-[1000px] lg:h-[259px] cursor-pointer lg:flex-row border-2 border-solid border-[#E5E7EB]">
                    <div className="w-full h-[calc(100vw*9/16)] lg:w-[450px] lg:h-[255px]">
                        <img
                            src={item.image}
                            className="w-full h-[calc(100vw*9/16)] lg:w-[450px] lg:h-[255px] bg-no-repeat bg-cover bg-center bg-indigo-900 rounded-tl-[4px] rounded-tr-[4px] lg:rounded-tr-none lg:rounded-bl-[4px]"
                            alt={`News ${index}`}
                        />
                    </div>
                    <div className="w-full lg:w-[550px] flex items-center">
                        <div className="mb-2 mt-2 ml-3 lg:ml-5 lg:mb-0">
                            <h1 className="font-bold uppercase text-2xl lg:text-3xl">{item.title}</h1>
                            <h1 className="text-indigo-900 font-bold mt-1 lg:mt-0">{item.date}</h1>
                        </div>
                    </div>
                </a>
            ))}
            <div className="flex justify-center pt-2 lg:pt-12">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="text-black border-solid shadow-xl rounded-md border-2 border-[#E5E7EB] px-4 py-1 hover:bg-gray-200 flex items-center font-bold text-xl"
                >
                    ÎNAPOI
                </button>
                <button
                    onClick={nextPage}
                    disabled={currentPage * itemsPerPage >= newsItems.length}
                    className="text-black border-solid shadow-xl rounded-md border-2 border-[#E5E7EB] px-4 py-1  hover:bg-gray-200 flex items-center font-bold text-xl ml-2"
                >
                    ÎNAINTE
                </button>
            </div>
        </div>
    );
};

export default NewsBox;