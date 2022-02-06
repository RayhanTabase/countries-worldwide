import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => (
  <p className="text-sm bg-[#35548B] pl-3">
    {title}
  </p>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
