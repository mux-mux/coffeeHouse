import Buttons from './Buttons';
import './Buttons.scss';

function BackButton({ children, as, variant, size, onClick, ...delegated }) {
  return (
    <Buttons
      as={as}
      variant={variant}
      size={size}
      onClick={onClick}
      {...delegated}
    >
      {children}
    </Buttons>
  );
}

export default BackButton;
