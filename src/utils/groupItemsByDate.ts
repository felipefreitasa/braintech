import _ from "lodash"
import moment from "moment"

import { HistoryItemProps } from "@storage/history/historyCreate"

export function groupItemsByDate(items: HistoryItemProps[] | undefined): { title: string, data: HistoryItemProps[] }[] {
  const groupedItems = _.groupBy(items, (item: HistoryItemProps) => moment(new Date(item.createdAt)).format('DD.MM.YYYY'))

  const result: { title: string, data: HistoryItemProps[] }[] = []

  for (const date in groupedItems) {
    if (groupedItems.hasOwnProperty(date)) {
      result.push({
        title: date,
        data: groupedItems[date]
      })
    }
  }

  result.sort((a, b) => moment(b.title, 'DD.MM.YYYY').valueOf() - moment(a.title, 'DD.MM.YYYY').valueOf())

  return result
}
