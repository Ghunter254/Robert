import { Link } from 'react-router-dom';

function Login() {
  return (
<div>
    <h1 className="pageheader">
        <span className="text-gradient">Login Here!</span>
    </h1>
    <div>
        <ul className="PersonalInfo">
            <li><input placeholder="First Name"/></li>
            <li><input placeholder="Last Name"/></li>
            <li><input placeholder="Email"/>  </li>
            <li><button className="returnalt"><Link to="/" className='returnalt'>Return</Link></button><button className="returnalt">Sign up</button><button className="returnalt">Login</button></li>
        </ul>

    </div>
    
</div>
  );
}

export default Login;
