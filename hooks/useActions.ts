import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import Creators from "../redux/index";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Creators, dispatch);
};
