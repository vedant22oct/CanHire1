import React, { useMemo } from 'react'
import Barchart from '../components/Barchart'
import { useSelector } from 'react-redux';

function HomePage() {
  const { applications } = useSelector(store => store.db)

  const data = useMemo(() => {
    const monthMapping = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };
    const records = []
    Object.keys(monthMapping).forEach(month => {
      const appliedCount = applications.filter(a => {
        const currmonth = Number(a.applied_on.split('-')[1])
        if (month == currmonth && a.status.startsWith("IN_PROGRESS")) {
          return true
        }
        return false
      })?.length || 0

      const filledCount = applications.filter(a => {
        const currmonth = Number(a.applied_on.split('-')[1])
        if (month == currmonth && a.status.startsWith("FILLED")) {
          return true
        }
        return false
      })?.length || 0

      const pendingCount = applications.filter(a => {
        const currmonth = Number(a.applied_on.split('-')[1])
        if (month == currmonth && a.status.startsWith("PENDING")) {
          return true
        }
        return false
      })?.length || 0

      records.push({
        name: monthMapping[month],
        applied: appliedCount,
        filled: filledCount,
        pending: pendingCount,
      })
    })
    return records;
  }, [applications])



  return (
    <div>
      <Barchart data={data} />
    </div>
  )
}

export default HomePage