//components
import NavBar from './navBar';

function NotFound() {
  return (
    <>
      <NavBar />
      <div className="not-found-container">
        <h1>404</h1>
        <h3>Oops.. Page Not Found</h3>
        <img
          src="https://media.istockphoto.com/id/2021491565/video/stress-at-work-frustrated-woman-character-animation-failure-burnout-or-overwork-stressful-job.jpg?s=640x640&k=20&c=d179ubf5uQoPwkNJSh4lnQTJlVm-vJiAXwjPkRtpQeM="
          alt=""
        />
      </div>
    </>
  );
}
export default NotFound;
