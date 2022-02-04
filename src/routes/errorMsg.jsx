import react from "react";

function ErrorPage() {
  return (
    <div className="ErrorPage" style={{ margin: 25 }}>
      <h1>Page not found.</h1>
      <p>
        The page you are looking for doesn't exist or an other error occured.
      </p>
      <p>Go back, or head over to the home menu to choose a new direction.</p>
    </div>
  );
}

export default ErrorPage;
