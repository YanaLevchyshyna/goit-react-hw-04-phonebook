import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterWrapp, LabelSearch, InputSearch } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapp>
      <LabelSearch htmlFor={'id' + nanoid()}>
        Find contacts by name
        <InputSearch
          id={'id' + nanoid()}
          placeholder="Search"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </LabelSearch>
    </FilterWrapp>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
