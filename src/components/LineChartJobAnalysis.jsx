import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #endregion
///export default function Example() {
const LineGraphChart = ({ data }) => {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
     data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
      <ReferenceLine y={9800} label="Max" stroke="red" />
      <Line type="monotone" dataKey="applied" stroke="#8884d8" />
      <Line type="monotone" dataKey="filled" stroke="#82ca9d" />
      <Line type="monotone" dataKey="pending" stroke="red" />
      <RechartsDevtools />
    </LineChart>
  );
}
export default LineGraphChart;
