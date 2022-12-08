import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatData from '../Functions/formatData';

function Cryptos(props) {
  const { data } = props;
  const navigate = useNavigate();

  const handleClick = (obj) => {
    navigate('/crypto-details', {
      state: {
        crypto: [obj],
      },
    });
  };

  return (
    <div>
      <h4 className="font-4 white p-two">Crypto Statistic</h4>
      <div className="flexbox cryptos">
        {formatData(data).map((d) => (
          <div className="cont" key={d.id}>
            <button
              type="button"
              className="btn-container p-two"
              onClick={() => handleClick(d)}
            >
              <div className="v-flex detail">
                <i className="fa-solid fa-circle-arrow-right arrow white" />
                <h4 className="font-4 white">{d.name}</h4>
                <p className="font-3 white">
                  {d.price}
                  $
                </p>
                <p className="font-3 white">
                  {d.change}
                  {d.change > 0 ? (
                    <i className="fa fa-caret-up" aria-hidden="true" />
                  ) : (
                    <i className="fa fa-caret-down" aria-hidden="true" />
                  )}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
// props validation should be proTypes
Cryptos.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};
export default Cryptos;