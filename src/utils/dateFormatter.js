import moment from 'moment'

export const dateToYear = date => moment(date).format('YYYY')
export const dateToMonth = date => moment(date).format('MMM YYYY')
export const dateToWeek = date => moment(date).format('GGGG-[W]WW')
export const dateToDay = date => moment(date).format('YYYY-MM-DD')
export const dateBeautify = date => moment(date).format('Do MMMM YYYY')
