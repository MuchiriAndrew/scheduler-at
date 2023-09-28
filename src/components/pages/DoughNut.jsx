import { Doughnut } from "react-chartjs-2";
import "../../styles/doughNut.scss";

/**
 * 
 * @param {{data: any}} param0 
 * @returns 
 */
export const DoughNut = ({ data }) => {
    return (
        <div className="chart-container">
            <Doughnut data={data} />
        </div>
    )
}