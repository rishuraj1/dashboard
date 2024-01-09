"use client"

import Image from "next/image"
import { useRouter, useParams, usePathname } from "next/navigation"
import { pexels } from '../../public'
import { ArrowBigDown } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface NavigationSidebarProps {
    options: {
        label: string
        path: string
        icon: React.ReactNode
    }[]
}

const NavigationSidebar = ({
    options
}: NavigationSidebarProps) => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <aside className="bg-[#1E2640] hidden md:flex w-[224px] max-w-[224px] h-full flex-col items-center py-[16px] px-[10px] gap-4 flex-1">
            <div className="flex flex-col gap-6 flex-1">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Image
                            src={pexels}
                            width={39}
                            height={39}
                            alt="Logo"
                            className="w-[39px] h-[39px] rounded-md"
                        />
                        <div className="flex flex-col gap-1">
                            <h1 className="text-[15px] font-medium text-[#FFFFFF]">
                                Nishyan
                            </h1>
                            <p className="underline text-[13px] font-normal text-[#FFFFFF]">
                                Visit store
                            </p>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white" />
                    </svg>
                </div>

                <ScrollArea className="space-y-4">
                    {
                        options?.map((option, index) => (
                            <button
                                onClick={() => router.push(option?.path)}
                                key={index}
                                className={cn(
                                    "flex py-2 px-4 w-[200px] items-start gap-3 hover:bg-[#FFFFFF]/10 rounded-[4px] transition ease-in-out duration-200",
                                    pathname === option?.path && "bg-[#FFFFFF]/10"
                                )}
                            >
                                {option?.icon}
                                <p className="text-[14px] text-[#FFFFFF]/80 font-medium">{option?.label}</p>
                            </button>
                        ))
                    }
                </ScrollArea>
            </div>

            <div className="w-[192px] flex gap-[10px] items-start rounded-sm bg-[#353C53] py-[6px] px-[12px]">
                <div className="flex p-[6px] items-start rounded-[4px] bg-[#FFFFFF]/10 w-[36px] h-[36px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00312 3.79727C2.42636 3.79727 1.80313 4.35527 1.80313 5.24727V18.7473C1.80313 19.6393 2.42636 20.1973 3.00312 20.1973H21.0031C21.5799 20.1973 22.2031 19.6393 22.2031 18.7473V15.8473H17.0032C14.8769 15.8473 13.1532 14.1236 13.1532 11.9973C13.1532 9.87097 14.8769 8.14727 17.0032 8.14727H22.2031V5.24727C22.2031 4.35527 21.5799 3.79727 21.0031 3.79727H3.00312ZM23.8031 8.14727V5.24727C23.8031 3.65398 22.6355 2.19727 21.0031 2.19727H3.00312C1.37075 2.19727 0.203125 3.65398 0.203125 5.24727V18.7473C0.203125 20.3405 1.37075 21.7973 3.00312 21.7973H21.0031C22.6355 21.7973 23.8031 20.3405 23.8031 18.7473V15.8473H23.8532V8.14727H23.8031ZM16.0032 11.9473C16.0032 11.4778 16.3837 11.0973 16.8532 11.0973H18.1532C18.6226 11.0973 19.0032 11.4778 19.0032 11.9473C19.0032 12.4167 18.6226 12.7973 18.1532 12.7973H16.8532C16.3837 12.7973 16.0032 12.4167 16.0032 11.9473ZM14.8532 11.9973C14.8532 10.8099 15.8158 9.84727 17.0032 9.84727H22.1532V14.1473H17.0032C15.8158 14.1473 14.8532 13.1847 14.8532 11.9973Z" fill="white" />
                    </svg>
                </div>

                <div className="flex flex-col items-start">
                    <p className="text-[13px] font-normal opacity-80 text-[#FFFFFF]">Available credits</p>
                    <span className="text-[16px] font-medium text-[#FFFFFF]">222.10</span>
                </div>

            </div>

        </aside>
    )
}

export default NavigationSidebar