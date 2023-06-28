import Navbar from "./Navbar";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Navbar/>
      <div className='container-fluid'>
        <div className='jumbotron bg-dark text-white text-center'>
          <h2 className='display-4'>{title}</h2>
          <p className='lead'>{description}</p>
        </div>
        {/* <p>This below div for main content @REMEMBER</p>*/}
        <div className={className}>{children}</div>
      </div>

      {/* FOOTER */}
      <footer className='footer bg-dark mt-auto py-3'>
        <div className='container-fluid bg-success text-white text-center py-3'>
          <h4>If you got any Question, feel free to reach out !</h4>
          <button className='btn btn-warning btn-lg '>Contact Us</button>
        </div>
        <div className='container text-center'>
          <span className='text-muted text-center'>
            An Amazing <span className='text-white'>Mern</span> BootCamp
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Base;
