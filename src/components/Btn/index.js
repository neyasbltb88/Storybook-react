import Btn from './Btn';
import { withMouseSideDetect } from '../../hocs'

export default Btn;

const BtnMouseDetect = withMouseSideDetect(Btn);

export {
    BtnMouseDetect
}