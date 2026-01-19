import React, { useMemo } from 'react'
import Barchart from '../components/Barchart'
import { useSelector } from 'react-redux';
import MonthMapping from '../assets/MonthMapping';
import LineChartJobAnalysis from '../components/LineChartJobAnalysis';
import ApplicationTable from '../components/ApplicationTable';

function HomePage() {
  const { applications } = useSelector(store => store.db)

  const data = useMemo(() => {
    const monthMapping = MonthMapping;
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
      <LineChartJobAnalysis data={data} />
      <ApplicationTable />
    </div>
  )
}

export default HomePage