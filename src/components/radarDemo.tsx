import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Treemap } from 'recharts';
import { TickItem } from 'recharts/types/util/types';

const data = [
  {
    subject: 'Acidity',
    A: 10,
  },
  {
    subject: 'Body',
    A: 4,
  },
  {
    subject: 'Sweet',
    A: 6,
  },
  {
    subject: 'Bitter',
    A: 1,
  },
  {
    subject: 'Clarity',
    A: 8,
  },
];

const treeMapData = [
  {
    name: 'data',
    children: [
      { name: 'SL-28', size: 74 },
      { name: 'SL-32', size: 32 },
      { name: 'Gesha', size: 12 },
      { name: 'Catuai', size: 54 },
      { name: 'Catimor', size: 20 },
      { name: 'Maragogype', size: 10 },
      { name: 'Typica', size: 43 },
      { name: 'Pache', size: 15 },
    ],
  },
];

const ticks: number[] = [0, 2, 4, 6, 8, 10]

const RadarDemo = () => {
  const radarTicks = ticks.map((v, i) => (
  {
    value: v,
    coordinate: v,
    index: i
  }
))
  return (
    <div className='min-h-screen w-full'>
      <div className='h-100 w-full flex justify-center'>
        <ResponsiveContainer width="90%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data} >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{fill: '#171717'}} />
            <PolarRadiusAxis />
            <Radar name="Coffee" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className='h-200 flex justify-center'>
        <ResponsiveContainer width="90%" height="100%">
          <Treemap data={treeMapData} dataKey="size" aspectRatio={4 / 2} stroke="#fff" fill="#8884d8" />
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RadarDemo