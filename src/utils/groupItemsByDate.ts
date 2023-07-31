import _ from "lodash"
import moment from "moment"

import { HistoryItemProps } from "@firebaseApp/methods"

export function groupItemsByDate(items: HistoryItemProps[] | undefined): { title: string, data: HistoryItemProps[] }[] {
  const groupedItems = _.groupBy(items, (item: HistoryItemProps) => moment(new Date(item.createdAt)).format('MM.DD.YYYY'))

  const result: { title: string, data: HistoryItemProps[] }[] = []

  for (const date in groupedItems) {
    if (groupedItems.hasOwnProperty(date)) {
      result.push({
        title: date,
        data: groupedItems[date]
      })
    }
  }

  result.sort((a, b) => moment(b.title, 'MM.DD.YYYY').valueOf() - moment(a.title, 'MM.DD.YYYY').valueOf())

  return result
}
