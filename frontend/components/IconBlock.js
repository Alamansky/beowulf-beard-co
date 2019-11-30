import Icon from "./Icon";
import Center from "./styles/Center";
import styled from "styled-components";
import InnerBorder from "./styles/InnerBorder";

const IconTitle = styled.h2`
  text-shadow: ${props => props.theme.textShadow};
  white-space: nowrap;
`;

const IconText = styled.p`
  text-shadow: ${props => props.theme.textShadow};
`;

const IconBlock = props => {
  return (
    <InnerBorder>
      <Center>
        <IconTitle>{props.title}</IconTitle>
        <Icon icon={props.icon} />
        <IconText>{props.text}</IconText>
      </Center>
    </InnerBorder>
  );
};

export default IconBlock;
