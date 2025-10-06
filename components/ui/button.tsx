
'use client';
import * as React from 'react';
import clsx from 'clsx';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: 'default'|'outline'; className?: string; };
export function Button({asChild,variant='default',className,children,...props}:ButtonProps){
  const base='inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition';
  const styles=variant==='outline'?'border border-zinc-300 text-zinc-900 hover:bg-zinc-50':'bg-zinc-900 text-white hover:bg-zinc-800';
  if(asChild)return <span className={clsx(base,styles,className)}>{children}</span>;
  return <button className={clsx(base,styles,className)} {...props}>{children}</button>;
}
