import Button from './Button';
import './Button.scss';

function BackButton({ children, as, variant, size, onClick, ...delegated }) {
  return (
    <Button
      as={as}
      variant={variant}
      size={size}
      onClick={onClick}
      {...delegated}
    >
      {children}
    </Button>
  );
}

export default BackButton;
