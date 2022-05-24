import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-center text-white text-3xl mb-5">My Portfolio</h1>
      <div className="overflow-x-auto text-center">
        <table className="table table-zebra w-full">
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>Abed Hossain Shadin</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th>Email</th>
              <td>abedshadin@gmail.com</td>
            </tr>

            <tr>
              <th>Education</th>
              <td>
                Undergraduate (Running) - North South University<br></br>
                HSC-2019 - Adamjee Cantonment College<br></br>
                SSC-2017 - Ideal Preparatory & High School
              </td>
            </tr>

            <tr>
              <th>Skills</th>
              <td>
                HTML <br></br>
                CSS<br></br>
                Javascript<br></br>
                PHP<br></br>
                Web Automation<br></br>
                Web Extension<br></br>
                React JS<br></br>
              </td>
            </tr>

            <tr>
              <th>Projects</th>
              <td>
                <a
                  className="link text-blue-500"
                  href="https://energy-power-966d0.web.app/"
                >
                  Manufacture Application
                </a>
                <br></br>
                <a
                  className="link text-blue-500"
                  href="https://warehouse-17112.web.app/"
                >
                  Warehouse Application
                </a>
                <br></br>
                <a
                  className="link text-blue-500"
                  href="https://wedding-capture.web.app/"
                >
                  Weeding Service Application
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
