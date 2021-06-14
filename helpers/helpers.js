exports.subMonths = (date, month) => {
    date.setMonth(date.getMonth() - month);
    return date;
}