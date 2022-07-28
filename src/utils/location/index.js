import { useNavigate } from 'react-router-dom';

export const useLocation = () => {
  const navigate = useNavigate();
  const navigateTo = ({ path }) => {
    navigate(path);
  };

  return { navigateTo };
};
