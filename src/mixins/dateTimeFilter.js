import moment from 'moment'

moment.updateLocale('ru', { monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_') })

export default {
  filters: {
    dateTimeFormat: (date, format) => moment(date).locale('ru').format(format),
  },
}
