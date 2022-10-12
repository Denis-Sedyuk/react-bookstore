import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "routes";
import { useAppSelector, getUser } from "store";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUser);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.USER} />;
};
