//import { useHistory } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
   // const history = useHistory();
   const navigate = useNavigate();

    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};