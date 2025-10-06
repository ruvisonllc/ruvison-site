
import * as React from 'react'; import clsx from 'clsx';
export function Card({className,...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={clsx('border rounded-2xl bg-white',className)} {...props}/>}
export function CardHeader({className,...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={clsx('p-5',className)} {...props}/>}
export function CardTitle({className,...props}:React.HTMLAttributes<HTMLHeadingElement>){return <h3 className={clsx('text-xl font-semibold',className)} {...props}/>}
export function CardContent({className,...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={clsx('p-5 pt-0',className)} {...props}/>}
