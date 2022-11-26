import React from "react";

const OrderDetailInfo = () => {
  return (
    <div className="row mb-5 order-info-wrap">
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-user"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Cliente</h6>
            <p className="mb-1">
              Yerson <br />
              <a href={`mailto:user@example.com`}>user@example.com</a>
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-truck-moving"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Información</h6>
            <p className="mb-1">
              Shipping: Colombia <br /> Método de pago: PayPal
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-map-marker-alt"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Envío a</h6>
            <p className="mb-1">
              Dirección: Medellín
              <br />
              Barrio
              <br /> Santa Lucía
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OrderDetailInfo;
