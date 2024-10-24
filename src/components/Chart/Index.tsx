import { Bar } from "react-chartjs-2";
import Title from "../Title/Index";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 2rem 0;
  background-color: #f0f0f0f0;
`;


const Main = styled.main`
  margin: 2rem 0;
`;

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Engajamento",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Main>
        <Container>
          <Title color="#000000" >Análise de engajamento</Title>
          <Bar data={data} />
        </Container>
      </Main>
    </>
  );
};

export default Chart;