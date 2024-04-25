'use client'
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react"

const debounce = (fn: Function, delay: number) => {
    let timer: any;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
};

const Introduction = () => {
    return (
        <li className=" relative flex-shrink-0 w-[416px]  h-[278px]">
            <div className=" absolute top-0 left-0 origin-center scale-[.99]  w-[416px] h-[278px] bg-[url('/images/Vector_141.png')] bg-cover bg-no-repeat bg-center"></div>
            <div className=" absolute top-0 left-0 z-10 w-[100%] h-[100%] bg-[url('/images/Vector_138.png')]  bg-cover bg-center hover:translate-y-[-5px] hover:translate-x-[6px] duration-150 p-10 ">
                <div className="w-[46px] h-[4px] rounded-[11px] bg-gradient-to-r from-[#38C1A5] to-[#0891D5]">
                </div>
                <div className="mt-7 flex flex-col justify-between items-start">
                    <h3 className="text-[#EDEDED] font-[NEXT-Book-Bold] text-[16px] leading-[16px]">Introduction to programming</h3>
                    <span className="mt-5 border border-[#676767] px-[8px] py-[4px] rounded-[20px] font-[NEXT-Book] text-white text-[9px] leading-[9.9px]">Beginner</span>
                    <p className=" mt-5 text-[12px] leading-[13.2px] text-[#676767] font-[NEXT-Book]">This course covers the most basic concepts in programming using Solidity as an example.</p>
                </div>
                <div className="flex mt-[50px] items-center">
                    <div className="flex justify-between  h-[14px]">
                        <Image src="/images/Frame_3465648.png" alt="hour" width={85} height={14}></Image>
                        <Image src="/images/Frame_3465649.png" alt="course" width={106} height={14}></Image>
                    </div>
                    <div className="w-[150px] flex justify-between rounded-[40px] px-[16px] py-[8px] bg-[#2A2A2A] text-[#9EFA13] font-[NEXT-Book] items-center text-[10px] flex">
                        <Image src="/images/Flight-Side_way.png" alt="flight" width={20} height={20}></Image>
                        45% COMPLETED
                    </div>
                </div>
            </div>
        </li>
    )
}

const ProgrammingBasics = () => {
    return (
        <li className=" relative flex-shrink-0 w-[416px] h-[278px]">
            <div className=" absolute top-0 left-0 origin-center scale-[.99]  w-[416px] h-[278px] bg-[url('/images/Vector_136.png')] bg-cover bg-no-repeat bg-center"></div>
            <div className=" absolute top-0 left-0 z-10 w-[416px] h-[278px] bg-[url('/images/Vector_139.png')] bg-cover bg-center hover:translate-y-[-5px] hover:translate-x-[6px] duration-150 p-10 ">
                <div className="w-[46px] h-[4px] rounded-[11px] bg-gradient-to-r from-[rgb(217,227,19)] to-[#3CBC34]">
                </div>
                <div className="mt-7 flex flex-col justify-between items-start">
                    <h3 className="text-[#EDEDED] font-[NEXT-Book-Bold] text-[16px] leading-[16px]">Web 3.0 Programming Basics</h3>
                    <span className=" mt-5 border border-[#676767] px-[8px] py-[4px] rounded-[20px] font-[NEXT-Book] text-white text-[9px] leading-[9.9px]">Beginner</span>
                    <p className="mt-5 text-[12px] leading-[13.2px] text-[#676767] font-[NEXT-Book]">Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.</p>
                </div>
                <div className="flex mt-[45px] items-center">
                    <div className="flex justify-between  h-[14px]">
                        <Image src="/images/Frame_3465648.png" alt="hour" width={85} height={14}></Image>
                        <Image src="/images/Frame_3465649.png" alt="course" width={106} height={14}></Image>
                    </div>
                </div>
            </div>
        </li>
    )
}

const Moonshot = () => {
    return (
        <li className=" relative flex-shrink-0 w-[416px] h-[278px]">
            <div className=" absolute top-0 left-0 origin-center scale-[.99]  w-[416px] h-[278px] bg-[url('/images/Vector_51.png')] bg-cover bg-no-repeat bg-center"></div>
            <div className=" absolute flex flex-col justify-between top-0 left-0 z-10 w-[416px] h-[278px] bg-[url('/images/Group_481878.png')] bg-cover bg-center hover:translate-y-[-5px] hover:translate-x-[6px] duration-150 p-10 ">
                <div className=" flex flex-col justify-between items-start">
                    <h3 className="text-[#EDEDED] font-[NEXT-Book-Bold] text-[16px] leading-[16px]">Moonshot 2023 Summer Hackathon</h3>
                    <div className="mt-5 flex space-x-[20px]">
                        <span className=" border border-[#676767] px-[8px] py-[4px] rounded-[20px] font-[NEXT-Book] text-white text-[9px] leading-[9.9px]">All Tracks</span>
                        <span className=" border border-[#676767] px-[8px] py-[4px] rounded-[20px] font-[NEXT-Book] text-white text-[9px] leading-[9.9px]">Solidity</span>
                        <span className=" border border-[#676767] px-[8px] py-[4px] rounded-[20px] font-[NEXT-Book] text-white text-[9px] leading-[9.9px]">ZK</span>
                    </div>
                </div>

                <ul>
                    <li className="flex mt-4 pb-2 justify-between items-center border-b border-[#282828]">
                        <span className=" text-[#676767] font-[NEXT-Book] text-[12px] leading-[13.2px]">Signup</span>
                        <span className=" text-[#EDEDED] text-[14px] leading-[14px] font-[neuemachina-regular]"  >4/15 - 6/15</span>
                    </li>
                    <li className="flex mt-4 pb-2 justify-between items-center border-b border-[#282828]">
                        <span className=" text-[#676767] font-[NEXT-Book] text-[12px] leading-[13.2px]">Event</span>
                        <span className=" text-[#EDEDED] text-[14px] leading-[14px] font-[neuemachina-regular]" >6/15 - 7/15</span>
                    </li>
                    <li className="flex mt-4 pb-2 justify-between items-center border-b border-[#282828]">
                        <span className=" text-[#676767] font-[NEXT-Book] text-[12px] leading-[13.2px]">Grant size</span>
                        <span className=" text-[#EDEDED] text-[14px] leading-[14px] font-[neuemachina-regular]"  >200K</span>
                    </li>
                </ul>
            </div>
        </li>
    )
}

const BitCoin = () => {
    return (
        <li className=" relative flex-shrink-0 w-[416px] h-[278px]">
            <div className=" absolute top-0 left-0 origin-center scale-[.99]  w-[416px] h-[278px] bg-[url('/images/Rectangle_1806.png')] bg-cover bg-no-repeat bg-center"></div>
            <div className=" absolute top-0 left-0 z-10 w-[416px] h-[278px] bg-[url('/images/Rectangle_1808.png')] bg-cover bg-center hover:translate-y-[-5px] hover:translate-x-[6px] duration-150 p-5 ">
                <div className="absolute mt-2 ml-3 w-[46px] h-[4px] rounded-[11px] bg-gradient-to-r from-[#E0AD38] to-[#EB3E1C]">
                </div>
                <Image src="/images/Mask_group.png" alt="Mask_group" width={416} height={278}></Image>
                <h3 className="absolute ml-3 bottom-[75px] text-[#EDEDED] font-[NEXT-Book-Bold] text-[16px] leading-[16px]">What is Bitcoin</h3>
                <Image className=" absolute right-[70px] bottom-5" src="/images/Frame_3465648.png" alt="hour" width={85} height={14}></Image>
            </div>
        </li>
    )
}

const ScrollButton: React.FC<{ className?: string, onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void, disabled: boolean }> = ({ className, onClick, disabled }) => {
    return (
        <div className={`h-[278px] w-[48px] absolute top-[50%] right-0  translate-y-[-50%] z-20 bg-gradient-to-r from-transparent duration-150 to-black/50 ${disabled ? " opacity-0 pointer-events-none" : " opacity-100"} ${className}`} >
            <div className="absolute top-[50%] translate-y-[-50%] text-white  border-2 border-[#303030] rounded-full w-[48px] h-[48px] bg-black hover:bg-[#303030]"
                onClick={onClick}
            >
                <Image className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" src="/images/Vector_116.png" alt="111" width={10} height={16}></Image>
            </div>
        </div>
    )
}


export default function Home() {
    const [distance, setDistance] = useState(0)
    const [flag, setFlag] = useState(false)
    const scrollBox = useRef<HTMLDivElement>(null)
    const scrollItem = useRef<HTMLUListElement>(null)
    useEffect(() => {

        const getDifference = debounce(() => {
            if (scrollBox.current?.clientWidth && scrollItem.current?.scrollWidth) {
                const dis = scrollBox.current?.clientWidth - scrollItem.current?.scrollWidth
                setFlag(dis != 0)
            }
        }, 10)
        getDifference()
        addEventListener('resize', getDifference);
        return () => {
            removeEventListener('res', getDifference);
        }
    })
    return (
        <>
            <div className="text-white pt-[50px] font-[NEXT-Poster-Bold] tracking-[0.02rem] text-[20px]  leading-[22.5px] ">{`< / Trending Now >`}</div>
            <div className=" relative overflow-hidden" ref={scrollBox}>

                <ul className={` flex space-x-10 py-[50px] duration-150`} style={{ transform: `translateX(${distance}px)` }} ref={scrollItem}>
                    <Introduction></Introduction>
                    <Moonshot></Moonshot>
                    <ProgrammingBasics></ProgrammingBasics>
                    <BitCoin></BitCoin>
                </ul>


                <ScrollButton disabled={!(flag && distance != 0)} className="rotate-180 left-0" onClick={() => {
                    setDistance(0)
                }} ></ScrollButton>



                <ScrollButton disabled={!(flag && distance == 0)} onClick={() => {
                    if (scrollBox.current?.scrollWidth && scrollItem.current?.scrollWidth) {
                        setDistance(scrollBox.current?.clientWidth - scrollItem.current?.scrollWidth)
                    }
                }} ></ScrollButton>

            </div>
        </>
    );
}
