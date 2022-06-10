import { Unit } from '../../graphql/types';
import * as S from './styles';

interface ToolbarProps {
  unit: Partial<Unit>;
  setUnit: (unit: Partial<Unit>) => void;
  status: string | null;
}

const Toolbar = ({ status, unit, setUnit }: ToolbarProps) => {
  return (
    <S.StyledToolbar>
      <div>
        <strong>{status}</strong>
      </div>
      <div>
        <select
          value={unit}
          aria-label="select unit"
          onChange={e => {
            setUnit(e.currentTarget.value as Partial<Unit>);
          }}
        >
          <option value={Unit.Metric}>Metric</option>
          <option value={Unit.Imperial}>Imperial</option>
          <option value={Unit.Kelvin}>Kelvin</option>
        </select>
      </div>
    </S.StyledToolbar>
  );
};

export default Toolbar;
