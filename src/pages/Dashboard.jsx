import AddCityForm from "../components/AddCityForm";
import WeatherList from "../components/WeatherList";

const Dashboard = () => (
  <div className="dashboard">
    <h1>Good Weather</h1>
    <AddCityForm />
    <WeatherList />
  </div>);

export default Dashboard;