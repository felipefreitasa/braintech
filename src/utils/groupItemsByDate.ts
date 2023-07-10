import _ from "lodash"
import moment from "moment"

import { HistoryItemProps } from "@storage/historyCreate"

export   function groupItemsByDate(items: HistoryItemProps[] | undefined): { title: string, data: HistoryItemProps[] }[] {
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

  return result
}