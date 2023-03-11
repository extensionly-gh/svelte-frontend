import { cva } from 'class-variance-authority';

export const inputStyles = cva(
	'focus:outline-none input p-2 rounded-md placeholder:text-base-content/40 placeholder:text-sm w-full text-sm',
	{
		variants: {
			intent: {
				primary: 'border bg-base-200 focus:border-base-content/40',
				darker: 'bg-gray-200 dark:bg-gray-900',
				error: 'border-error border-2 bg-base-200',
				searchBar:
					'border bg-base-200 shadow-md focus:border-base-content/40 rounded-3xl pl-5 placeholder:text-lg placeholder:font-medium placeholder:text-base-content/50 text-lg h-[3rem]'
			},
			height: {
				default: 'h-[2.5rem]',
				textarea: 'h-[10rem]'
			}
		},
		defaultVariants: {
			intent: 'primary',
			height: 'default'
		}
	}
);
