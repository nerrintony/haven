import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import css from './PaymentChart.module.scss';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const PaymentChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Months',
                data: [3, 6, 5, 10, 7],
                backgroundColor: ['lightBlue', 'lightBlue', 'lightBlue', 'blue', 'lightBlue', 'lightBlue',],
                borderRadius: 10,
            }
        ]
    };

    const options = {};

    return (
        <>
            <div className={`${css['chart']} d-flex justify-content-center`}>
                <Bar
                    data={data}
                    options={options}>
                </Bar>
            </div>
        </>
    );
}

export default PaymentChart;