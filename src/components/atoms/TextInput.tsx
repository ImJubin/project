import * as React from 'react';
import {Input} from '@/components/ui/input';
import { cn } from '@/lib/utils';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  onValueChange: (value: string) => void
  invalid?: boolean
}

export function TextInput({
    value,
    onValueChange,
    invalid,
    className,
    ...rest
}: TextInputProps) {
    return (
        <Input
            value = {value}
            onChange = {(e)=> onValueChange(e.target.value)}
            className={cn(
            'w-full rounded-lg border px-4 py-2 outline-none transition-colors',
            invalid
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-[#00A4FD] focus:ring-[#00A4FD]',
            className
            )}
            {...rest}
        />
    )
}
