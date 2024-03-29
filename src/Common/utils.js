import dayjs from "dayjs";

export function nightsDifference(returnDate, departDate) {
    const timeDifference = new Date(returnDate) - new Date(departDate);
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
}

export function dateFormat(date) {
    const formattedDate = new Date(date);
    return `${formattedDate.getDate()}.${
        formattedDate.getMonth() + 1
    }.${formattedDate.getFullYear()}.`;
}

export function isPastCurrentDate(date) {
    console.log(dayjs(date) < dayjs(new Date()))
    return dayjs(date) < dayjs(new Date());
}
