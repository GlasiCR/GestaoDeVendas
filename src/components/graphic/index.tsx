import { PieChart, Pie, Label, LabelList } from "recharts";

type Props ={
  valueApi?: number,
  valueDifference?: number,
}

export default function Graphic({valueApi, valueDifference}: Props) {
  const labelStyle = {
    fontSize: '16px',
    fill: '#FFF',
    fontWeight: 400,
    lineHeight: '140%',
    fontFamily: 'Poppins',
    textAlign: 'center',
  }

  return (
    <PieChart width={120} height={130}>
      <Pie
        data={[
          { name: 'Group A', value: valueApi || 0, fill: '#796CE0' },
          { name: 'Group B', value: valueDifference || 0, fill: '#000E4D' },
        ]}
        cx={53}
        cy={60}
        innerRadius={40}
        outerRadius={52}
        fill="#8884d8"
        dataKey="value"
        stroke="none" 
        cornerRadius={10}  
      >
          
          <Label
          value={valueApi}
          position="center"
          content={({ value }) => (
            <text x={53} y={60} dy={8} textAnchor="middle" style={labelStyle}>
              {value}%
            </text>
          )}
          />
      </Pie>
    </PieChart>
  );
}