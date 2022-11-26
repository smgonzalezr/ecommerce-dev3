import React from "react";
import { Link } from "react-router-dom";

const LatestOrder = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Últimos Envíos</h5>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <b>Usuarios</b>
              </td>
              <td>user@example.com</td>
              <td>$345</td>
              <td>
                <span className="badge rounded-pill alert-success">
                  Pagado hoy a las 10:13 AM
                </span>
              </td>
              <td>Hoy a las 10:13 AM</td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/order`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
            {/* Not Paid */}
            <tr>
              <td>
                <b>User</b>
              </td>
              <td>user@example.com</td>
              <td>$345</td>
              <td>
                <span className="badge rounded-pill alert-danger">
                  Hoy a las 10:13 AM
                </span>
              </td>
              <td>Hoy a las 10:13 AM</td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/order`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrder;
