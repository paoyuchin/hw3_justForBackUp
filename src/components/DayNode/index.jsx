import React from 'react';
// import PropTypes from 'prop-types';
import style from '../../App.scss';

const DayNode = ({ data }) => {
  let hasData = '';
  let disabled = '';
  let GuaranteedTripTag = '';
  let tag = '';
  if (data.status) {
    hasData = style.hasData;
    data.total = '團位' + data.total;
    data.price = '$' + data.price;
    data.available = '可賣' + data.available;
  }
  if (!data.day) {
    disabled = style.disabled;
  }
  if (data.guaranteed) {
    tag = '保證出團';
    GuaranteedTripTag = style.GuaranteedTripTag;
  }
  return (
    <li className={`${style.calendar_days} ${hasData} ${disabled}`}>
      <div className={style.date}>{data.day}</div>
      <div className={style.status}>{data.status}</div>
      <div className={style.total}>{data.total}</div>
      <div className={style.price}>{data.price}</div>
      <div className={style.sell}>{data.available}</div>
      <span className={GuaranteedTripTag}>{tag}</span>
    </li>
  );
};

// Board.propTypes = {
//   title: PropTypes.string,
// };

export default DayNode;
