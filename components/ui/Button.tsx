import { cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactElement, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'muted';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  asChild?: boolean;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-arroyo-accent text-arroyo-bg font-body font-medium px-8 py-3.5 rounded-sharp hover:bg-arroyo-accentHi hover:scale-[1.01] transition-all duration-250',
  ghost:
    'border border-arroyo-accent text-arroyo-accent font-body font-medium px-8 py-3.5 rounded-sharp bg-transparent hover:bg-arroyo-accent/10 transition-all duration-250',
  muted:
    'border border-arroyo-border text-arroyo-textSecondary font-body font-medium px-8 py-3.5 rounded-sharp hover:border-arroyo-textSecondary transition-all duration-250'
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Button({ variant = 'primary', asChild = false, className, children, ...props }: ButtonProps) {
  const classes = cx('ui-button cursor-pointer active:scale-[0.99]', `ui-button--${variant}`, variantClasses[variant], className);

  if (asChild) {
    if (!isValidElement(children)) {
      return null;
    }

    const child = children as ReactElement<{ className?: string }>;
    return cloneElement(child, {
      className: cx(classes, child.props.className)
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
