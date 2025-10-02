import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const data = [
  { month: 'Jan', chosen: 500, last: 3500 },
  { month: 'Feb', chosen: 2000, last: 6000 },
  { month: 'Mar', chosen: 1200, last: 900 },
  { month: 'Apr', chosen: 4200, last: 8500 },
  { month: 'May', chosen: 1100, last: 2200 },
  { month: 'Jun', chosen: 1200, last: 5000 },
  { month: 'Jul', chosen: 8000, last: 4500 },
  { month: 'Aug', chosen: 2000, last: 1600 },
  { month: 'Sep', chosen: 6700, last: 7600 },
  { month: 'Oct', chosen: 1300, last: 3000 },
  { month: 'Nov', chosen: 6000, last: 3300 },
  { month: 'Dec', chosen: 4500, last: 700 },
];

const ChartComponent = () => {

    
  return (
    <div
      style={{
        width: '100%',
        height: 400,
        padding: '10px',
        borderRadius: '8px'
      }}
    >
      <div style={{ marginBottom: '10px', fontSize: '14px', color: '#000' }}>
        <span>Select Period: </span>
        <select defaultValue="All">
          <option value="All">All</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
  <defs>
    <linearGradient id="colorChosen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#165DFF" stopOpacity={0.4} />
      <stop offset="95%" stopColor="#165DFF" stopOpacity={0} />
    </linearGradient>
    <linearGradient id="colorLast" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#0FC6C2" stopOpacity={0.4} />
      <stop offset="95%" stopColor="#0FC6C2" stopOpacity={0} />
    </linearGradient>
  </defs>

  <CartesianGrid strokeDasharray="3 3" vertical={false} />

  <XAxis
    dataKey="month"
    stroke="#000000"
    tick={{ fill: '#000000', fontSize: 12 }}
  />

  <YAxis
    domain={[0, 10000]}
    ticks={[0, 1000, 2000, 4000, 8000, 10000]}
    interval={0}
    tickFormatter={(value) => `$${value.toLocaleString()}`}
    stroke="#000000"
    tick={{ fill: '#000000', fontSize: 12 }}
  />

  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
  <Legend verticalAlign="top" align="right" />

  <Area
    type={'monotone'}
    dataKey="chosen"
    name="Chosen Period"
    stroke="#165DFF"
    fill="url(#colorChosen)"
    fillOpacity={1}
  />
  <Area
    type={'monotone'}
    dataKey="last"
    name="Last Period"
    stroke="#0FC6C2"
    fill="url(#colorLast)"
    fillOpacity={1}
  />
</AreaChart>

      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
