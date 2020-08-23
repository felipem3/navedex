import moment from 'moment'

export const diffDateNowToString = (date, format) => {
  const convertDate = moment(date, format)
  const years = moment().diff(date, 'years')
  convertDate.add(years, 'years')
  const month = moment().diff(convertDate, 'months')
  convertDate.add(month, 'months')
  const days = moment().diff(convertDate, 'days')

  return `${years > 0 ? `${years} ${years > 1 ? 'anos' : 'ano'}` : ''}
  ${month > 0 ? `${years > 0 ? ' e ' : ''}${month} ${month > 1 ? 'meses' : 'mês'}` : ''}
  ${month === 0 && years === 0 ? `${days} ${days > 1 ? 'dias' : 'dia'}` : ''}`
}
export const diffYearsToString = (date, format) => {
  const years = moment().diff(moment(date, format), 'years')
  return `${years} ${years > 1 ? 'anos' : 'ano'}`
}

export default diffDateNowToString
