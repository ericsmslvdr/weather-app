import { useContext } from "react";
import LocationContext from "../contexts/LocationContext";

const useLocation = () => useContext(LocationContext);

export default useLocation;
