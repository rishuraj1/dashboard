import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

const tableData = [
    {
        orderId: '#281209',
        status: 'Successful',
        trnId: 131634495747,
        refundDate: 'Today, 08:45 PM',
        orderAmt: '₹1,125.00'
    },
    {
        orderId: '#281208',
        status: 'Processing',
        trnId: 131634495747,
        refundDate: 'Yesterday, 3:00 PM',
        orderAmt: '₹1,125.00'
    },
    {
        orderId: '#281207',
        status: 'Successful',
        trnId: 131634495747,
        refundDate: '12 Jul 2023, 03:00 PM',
        orderAmt: '₹1,125.00'
    },
    {
        orderId: '#281206',
        status: 'Successful',
        trnId: 131634495747,
        refundDate: '12 Jul 2023, 03:00 PM',
        orderAmt: '₹1,125.00'
    },
    {
        orderId: '#281205',
        status: 'Successful',
        trnId: 131634495747,
        refundDate: '12 Jul 2023, 03:00 PM',
        orderAmt: '₹1,125.00'
    },
    {
        orderId: '#281204',
        status: 'Successful',
        trnId: 131634495747,
        refundDate: '12 Jul 2023, 03:00 PM',
        orderAmt: '₹1,125.00'
    },
]


const TableComp = () => {
    return (
        <Table className="w-full">
            <TableHeader>
                <TableRow className="bg-[#F2F2F2] rounded-[4px] py-[10px] px-3">
                    <TableHead className="w-1/5">Order ID</TableHead>
                    <TableHead className="w-1/5">Status</TableHead>
                    <TableHead className="w-1/5">TRN ID</TableHead>
                    <TableHead className="w-1/5">Refund Date</TableHead>
                    <TableHead className="flex items-center justify-end">Order Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.map((item, index) => (
                    <TableRow key={index} className="border-b-[1px]">
                        <TableCell className="text-[#146EB4] text-[14px] font-medium">{item.orderId}</TableCell>
                        <TableCell className="flex items-center gap-3 text-[#1A181E] font-normal text-[14px]">
                            <div className={cn(
                                "w-[10px] h-[10px] rounded-full",
                                item?.status === 'Successful' && 'bg-[#17B31B]',
                                item?.status === 'Processing' && 'bg-[#999999]',
                            )}>
                            </div>
                            {item?.status}
                        </TableCell>
                        <TableCell className="text-[#4D4D4D] font-normal text-[14px]">{item.trnId}</TableCell>
                        <TableCell className="text-[#4D4D4D] font-normal text-[14px]">{item.refundDate}</TableCell>
                        <TableCell className="flex items-center justify-end text-[#1A181E] text-[14px] font-normal">{item.orderAmt}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TableComp