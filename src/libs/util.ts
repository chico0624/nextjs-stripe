import { Interval } from "@/types/Price";

export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'JPY',
        minimumFractionDigits: 0,
    }).format(amount);
}

export const formatInterval = (interval: Interval) => {
    const intervals = {
        day: '日',
        month: '月',
        week: '週',
        year: '年',
    }
    return intervals[interval];
}