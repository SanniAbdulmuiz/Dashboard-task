import { colorMap } from '@/app/data'

interface TypeColorBarProps {
  type: 'survey' | 'exploration' | 'production'
}

export default function TypeColorBar({ type }: TypeColorBarProps) {
  return (
    <div
      className='absolute left-0 top-0 h-full w-1 rounded-l-md'
      style={{ backgroundColor: colorMap[type] }}
    />
  )
}
