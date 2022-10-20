import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
          </p>
          <p>
        Total: <span>{total}</span>
          </p>
          <p>
        Positive feedback: <span>{positiveFeedback}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;


// import PropTypes from 'prop-types';
// import 

// const Statistics = ({item}) => {
//   return (
//       <h2>Counter</h2>
//       <div>
//            {items.map(item => (
//           <p key={item.name}>
//             {item.title} - {this.state[item.name]}
//           </p>
//         ))}   
//       </div>
        
//   );
// };

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
// //   total: PropTypes.number.isRequired,
// //   positivePercentage: PropTypes.number.isRequired,
// };

// export default Statistics;
