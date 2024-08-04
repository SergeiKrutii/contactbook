import SpriteIcon from "../spriteIcon/SpriteIcon";
import { StyledGetBackButton } from "./StyledGetBackButton";
import { useNavigate } from "react-router-dom";

const GetBackButton = (props) => {
  const navigate = useNavigate();

  return (
    <StyledGetBackButton
      onClick={() => navigate("/contacts", { replace: true })}
    >
      <SpriteIcon name={"icon-arrow_back"} />
    </StyledGetBackButton>
  );
};

export default GetBackButton;
