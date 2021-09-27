import { Button} from "react-bootstrap";

const CustomButton = ({width, variant, text}) => {

    return <Button style={{width: width}} variant={variant}>{text}</Button>
}

export default CustomButton