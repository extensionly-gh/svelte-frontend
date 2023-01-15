import { toast } from '@zerodevx/svelte-toast'
import { CheckmarkIcon, ExclamationIcon, InfoIcon, WarningIcon } from './icon-svgs'

const generateHtml = (icon: string, msg: string) =>
  `<div class="flex gap-2 items-center text-sm">${icon} ${msg}<div>`

export const toastSuccess = (msg: string) => toast.push(generateHtml(CheckmarkIcon, msg),
  { classes: ['toast-success dark:toast-success-dark'] }
)

export const toastWarning = (msg: string) => toast.push(generateHtml(WarningIcon, msg),
  { classes: ['toast-warning dark:toast-warning-dark'] }
)

export const toastInfo = (msg: string) => toast.push(generateHtml(InfoIcon, msg),
  { classes: ['toast-info dark:toast-info-dark'] }
)

export const toastError = (msg: string) => toast.push(generateHtml(ExclamationIcon, msg),
  { classes: ['toast-error dark:toast-error-dark'] }
)