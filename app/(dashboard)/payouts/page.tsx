import TableComp from "@/components/table";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ArrowRight, Download, DownloadIcon, HelpCircle, Search, SearchIcon, SortAsc } from "lucide-react";
import Link from "next/link";


const PayoutsPage = () => {
    return (
        <div className="flex flex-col gap-8 w-full items-start p-8">
            <div className="flex justify-between items-center self-stretch">
                <p className="text-[20px] font-medium text-[#1A181E]">
                    Overview
                </p>
                <Select>
                    <SelectTrigger className="w-[137px] h-[36px] shrink-0 border-[1px] border-[#D9D9D9] rounded-sm justify-between items-center flex px-[14px] py-[6px] text-[#4D4D4D] text-[16px] font-normal">
                        <SelectValue placeholder="This Month" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">This Day</SelectItem>
                        <SelectItem value="dark">This Year</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex md:flex-row flex-col md:tems-start justify-between gap-5 self-stretch">
                <div className="flex w-[356.67px] h-[154px] p-5 flex-col items-start gap-4 self-stretch rounded-[8px] bg-[#146eb4] relative">
                    <div className="font-normal justify-between flex gap-4 text-white h-[24px] items-center">
                        <p className="text-[16px]">
                            Next Payouts
                        </p>
                        <HelpCircle className="w-[16px] h-[16px]" />
                    </div>
                    <div className="h-[38px] w-full justify-between flex items-center">
                        <p className="text-[32px] font-medium text-white flex justify-between items-center">
                            ₹2,312.23
                        </p>
                        <span className="text-white underline flex items-center gap-1">
                            23 orders
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                    <div className="w-[356.67px] h-[36px] bg-[#0E4F82] absolute flex rounded-[8px] justify-between px-[24px] py-[8px] bottom-0 right-0 self-stretch">
                        <p className="text-[14px] font-normal text-[#F2F2F2]">
                            Next payout date:
                        </p>
                        <p className="text-[14px] font-medium text-[#F2F2F2]">
                            Today, 04:00PM
                        </p>
                    </div>
                </div>

                <div className="h-[118px] w-[356.67px] gap-[24px] flex flex-col shadow-md">
                    <div className="flex flex-col p-[20px] gap-4">
                        <p className="flex items-center text-[#4D4D4D]">
                            Amount Pending
                            <HelpCircle className="w-[16px] h-[16px] ml-[8px] cursor-pointer" />
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="flex items-center font-medium text-[32px]">
                                ₹92,312.20
                            </p>
                            <Link href="/payouts" className="underline flex items-center gap-1 text-blue-500">
                                13 orders
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="h-[118px]  w-[356.67px] gap-[24px] flex flex-col shadow-md">
                    <div className="flex flex-col p-[20px] gap-4">
                        <p className="flex items-center text-[#4D4D4D]">
                            Amount Processed
                            <HelpCircle className="w-[16px] h-[16px] ml-[8px] cursor-pointer" />
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="flex items-center font-medium text-[32px]">
                                ₹23,92,312.19
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gap-6">
                <div className="h-[84px] w-[252px] gap-6">
                    <p className="text-[20px] font-medium text-[#1A181E]">
                        Transactions | This Month
                    </p>
                    <div className="h-[84px] w-[252px]">
                        <div className="flex justify-between">
                            <button
                                className="bg-[#E6E6E6] rounded-[40px] w-[118px] py-[6px] px-[16px] text-[#808080] text-[14px] font-medium"
                            >
                                Payouts (22)
                            </button>
                            <button
                                className="bg-[#146EB4] rounded-[40px] w-[118px] py-[6px] px-[16px] text-white text-[14px] font-medium"
                            >
                                Refunds (6)
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="flex flex-col gap-3 w-full px-3">
                <div className="flex justify-between items-center w-full">
                    <div className="flex h-[40px] w-[248px] border-[1px] py-[10px] px-4 gap-2 rounded-[8px]">
                        <SearchIcon className="w-4 h-4 text-[#4D4D4D]" />
                        <input
                            placeholder="Order ID or transaction ID"
                            className="text-[#4D4D4D] text-[14px] font-normal"
                        />
                    </div>

                    <div className="gap-4 flex items-center">
                        <button className="flex gap-[8px] items-center border-[1px] rounded-[4px] py-[6px] px-[12px]">
                            <p className="font-normal text-[16px] text-[#4D4D4D]">
                                Sort
                            </p>
                            <SortAsc className="w-4 h-4 text-[#4D4D4D]" />
                        </button>
                        <button className="border-[1px] w-[36px] h-[36px] flex items-center justify-center rounded-[4px]]">
                            <DownloadIcon className="w-5 h-5 text-[#4D4D4D]" />
                        </button>
                    </div>
                </div>


                <div className="w-full">
                    <TableComp />
                </div>

            </section>
        </div>
    );
}

export default PayoutsPage