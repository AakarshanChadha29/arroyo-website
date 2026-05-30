import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type CardProps<T extends ElementType = 'div'> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Card<T extends ElementType = 'div'>({ as, className, children, ...props }: CardProps<T>) {
  const Component = as || 'div';

  return (
    <Component
      className={cx(
        'ui-card bg-arroyo-surface border border-arroyo-border rounded-sharp p-8 hover:border-arroyo-accent transition-colors duration-300 hover:shadow-[0_0_20px_rgba(0,180,216,0.10)]',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
