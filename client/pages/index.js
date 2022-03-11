import axios from 'axios';


const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);
  // axios.get('/api/users/currentuser');
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  // console.log(req.headers);
  if (typeof window === 'undefined') {
    // we are on the server
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        'headers': req.headers
      }
    );

    return data;
  } else {
    const { data } = await axios.get('/api/users/currentuser');
    // we are on the browser
    
    return data;
  }
  return {};
};

export default LandingPage;
