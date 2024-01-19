import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = ({usernameRef, passwordRef, handleSubmit, setAlert, alert}) => {
  // const usernameRef = useRef(null);
  // const passwordRef = useRef(null);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [alert, setAlert] = useState(null);
//   const registerNewUser = async (newUser) => {
//     try {
//         const endpoint = "http://192.168.20.7:5000/register";

//         const response = await axios.post(endpoint, newUser, {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         console.log("Response:", response); // Log the entire response object
//         if (response.status) {
//           showAlert("success", "Congratulations! You've been registered with us.")
//         } 
//   } 
  
//   catch (error) {
//     if (error.response.status === 400) {
//       showAlert("warning", `username ${username} is already taken. Please try again with another username.`)
//     } else if (error.request) {
//       showAlert("danger", "An error occured.")
//     } else {
//       showAlert("danger", "An error occured.")
//     }
//   }
// };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   const username = usernameRef.current.value;
  //   const password = passwordRef.current.value;

  //   setUsername(username);
  //   setPassword(password);

  //   usernameRef.current.value = null;
  //   passwordRef.current.value = null;

  //   const newUser = {username: username, password: password};

  //   registerNewUser(newUser);
  // };

  // const showAlert = (type, message) => {
  //   setAlert({type: type, message: message});
  //   setTimeout(() => setAlert(null), 5000);
  // }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

        {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{alert.type === "success" ? "Oh yeah!:" : alert.type === "warning" ? "Oh no!:" : "Opps:"}</strong> {alert.message}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlert(null)}></button>
        </div>
        )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                ref={usernameRef}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                ref={passwordRef}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
