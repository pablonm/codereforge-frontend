import format from 'date-fns/format'

export const formatComplete = date => {
  return format(new Date(date), 'HH:mm MMM Do YYYY')
}

export default formatComplete
