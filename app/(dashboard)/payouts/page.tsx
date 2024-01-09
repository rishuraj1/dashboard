import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ArrowRight, HelpCircle } from "lucide-react";


const PayoutsPage = () => {
    return (
        <div className="flex flex-col gap-8 items-start p-8">
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

            <div className="flex items-start gap-5 self-stretch">
                <div className="flex h-[154px] w-[370.67px] p-5 flex-col items-start gap-4 self-stretch rounded-[8px] bg-[#146eb4] relative">
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
                    <div className="w-[370.67px] h-[36px] bg-[#0E4F82] absolute flex justify-between rounded-[8px] justify-between px-[24px] py-[8px] bottom-0 right-0">
                        <p className="text-[14px] font-normal text-[#F2F2F2]">
                            Next payout date:
                        </p>
                        <p className="text-[14px] font-medium text-[#F2F2F2]">
                            Today, 04:00PM
                        </p>
                    </div>
                </div>

                <div className="w-[370.67px] h-[118px] gap-[24px] flex flex-col items-center">
                    <div className="w-[330.67px] h-[78px] gap-4 flex items-start">
                        <p className="gap-2">
                            Amount Pending
                        </p>
                        <HelpCircle className="w-3 h-3 items-center" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayoutsPage