import { useLocation } from "react-router-dom";

export default function PlanetsPage() {
  const location = useLocation();

  return (
    <div>
      <h1 className=" text-red-700">{location.state.name}</h1>
      <img src={location.state.image} alt="planet" />
    </div>
  );
}
