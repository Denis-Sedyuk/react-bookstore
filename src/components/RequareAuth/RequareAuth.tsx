import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../routes";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors/userSelectors";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUser);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.USER} />;
};
