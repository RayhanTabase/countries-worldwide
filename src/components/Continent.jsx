import PropTypes from 'prop-types';
import WorldMap from 'react-svg-worldmap';

const Continent = ({ region, totalPop }) => {
  let marked = [];
  const data = [
    { country: 'cn', value: 1389618778 }, // china
    { country: 'in', value: 1311559204 }, // india
    { country: 'us', value: 331883986 }, // united states
    { country: 'id', value: 264935824 }, // indonesia
    { country: 'pk', value: 210797836 }, // pakistan
    { country: 'br', value: 210301591 }, // brazil
    { country: 'ng', value: 208679114 }, // nigeria
    { country: 'bd', value: 161062905 }, // bangladesh
    { country: 'ru', value: 141944641 }, // russia
    { country: 'mx', value: 127318112 }, // mexico
  ];
  switch (region) {
    case 'Asia':
      marked = [];
      marked.push(data[0]);
      marked.push(data[1]);
      marked.push(data[3]);
      marked.push(data[4]);
      marked.push(data[7]);
      break;

    case 'Europe':
      marked = [];
      marked.push({ country: 'ru', value: 1389618778 });
      marked.push({ country: 'ru', value: 210797836 });
      break;

    case 'Africa':
      marked = [];
      // marked.push(data[0]);
      marked.push({ country: 'ng', value: 1389618778 });
      marked.push({ country: 'ng', value: 210797836 });

      break;

    case 'Americas':
      marked = [];
      marked.push(data[2]);
      marked.push(data[5]);
      marked.push(data[9]);
      break;

    default:
      marked = [];
      marked = data;
  }

  return (
    <div className="bg-[#5788E4] min-h-[7rem] flex flex-col justify-center items-center p-2">
      <div>
        <WorldMap
          color="blue"
          title="Top 10 Populous Countries"
          value-suffix="people"
          size="sm"
          data={marked}
        />
      </div>
      <p>
        { Math.abs(totalPop) > 999
          ? `${Math.sign(totalPop) * ((Math.abs(totalPop) / 1000).toFixed(1))}k`
          : Math.sign(totalPop) * Math.abs(totalPop)}
      </p>
    </div>
  );
};

Continent.propTypes = {
  region: PropTypes.string.isRequired,
  totalPop: PropTypes.number.isRequired,
};

export default Continent;
