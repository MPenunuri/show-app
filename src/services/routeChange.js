import { useNavigate } from "react-router-dom";

export default function routeChange(path){
  const navigate = useNavigate();
  return navigate(path);
}