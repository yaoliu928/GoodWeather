import AddCityForm from "../components/AddCityForm";
import WeatherList from "../components/WeatherList";

const Dashboard = () => (
  <div className="dashboard">
    <h1>Dashboard</h1>
    <AddCityForm />
    <WeatherList />
  </div>);

export default Dashboard;