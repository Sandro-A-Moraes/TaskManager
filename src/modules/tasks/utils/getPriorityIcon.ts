import type { Priority } from '../types/tasks'

export const getPriorityIcon = (priority: Priority): string => {
  switch (priority) {
    case 'baixa':
      return '🟢'
    case 'media':
      return '🟡'
    case 'alta':
      return '🔴'
  }
}
