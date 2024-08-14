'use client'

import LoadingScreen from "@/components/UI/LoadingScreen";
import { useAppSelector } from "@/redux/hooks";
import { selectFilms } from "@/redux/slices/filmsSlice";
import { IMAGE_BASE_URL } from "@/utils/constants";
import { BreadcrumbItem, Breadcrumbs, Card, CardBody, CardHeader, Chip, Image, ScrollShadow } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

interface FilmPageProps {
    film: any;
}
const MainInfo = ({ film }: FilmPageProps) => {
    return <>
        <div>
            <div className="my-6 ms-2 flex items-center justify-center">
                <Breadcrumbs size="sm" radius="sm" variant={"solid"}>
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {film?.title}
                    </BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className=" min-h-full  overflow-hidden relative pb-6 md:pb-12">
                <div className=" z-0">
                    <div>
                        <ScrollShadow
                            hideScrollBar
                            visibility="bottom"
                            size={250}
                            className="overflow-hidden"
                        >
                            <Image
                                className={`${film?.backdrop_path == null
                                    ? "md:h-[600px]"
                                    : "w-screen sm:h-[400px] lg:h-[600px] rounded-t-[45px] md:rounded-t-none object-contain object-center"
                                    } `}
                                radius="lg"
                                src={`${film?.backdrop_path == null
                                    ? "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1713290436/gccpgmp6z5z6mljukeql.svg"
                                    : `${IMAGE_BASE_URL}${film?.backdrop_path}`
                                    }`}
                                alt={film?.title}
                            />
                        </ScrollShadow>
                    </div>
                </div>
            </div>
            <div className="z-10 absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center">
                    <Image
                        draggable={false}
                        className="w-[125px] md:w-[150px]  object-cover "
                        alt={film?.title}
                        src={`${film?.poster_path == null
                            ? "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1713290436/hgm3qerrugol5rycsvjn.svg"
                            : `${IMAGE_BASE_URL}${film?.poster_path}`
                            }`}
                    />
                </div>
            </div>
        </div>
        <div className="mx-2 flex flex-col items-center mt-32 md:mt-36 justify-center text-center">
            <h1 className="font-bold text-4xl md:text-6xl uppercase">{film.title}</h1>
            <span className=" font-medium mt-3">{film.tagline}</span>
            <Chip
                size="sm"
                radius="sm"
                color="danger"
                className={`${film.release_date ? null : "hidden"} my-2`}
                variant="flat"
                startContent={<MdOutlineTipsAndUpdates />}
            >
                <span className={`font-bold `}>
                    {film.release_date}
                </span>
            </Chip>
            <div
                className={`${film.overview ? null : "hidden"
                    } flex justify-center items-center `}
            >
                <Card
                    shadow="none"
                    radius="sm"
                    className="mt-3 mx-4 md:w-3/4 lg:w-2/4 bg-gray-200 dark:bg-[#18181B] "
                >
                    <CardHeader>
                        <h3 className="font-bold">Movie Overview</h3>
                    </CardHeader>
                    <CardBody>
                        <p className="text-sm">{film.overview}</p>
                    </CardBody>
                </Card>
            </div>
        </div>

    </>;
};

export default MainInfo;