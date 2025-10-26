export type Data = {
  name: string
  holes: number
  type: 'survey' | 'exploration' | 'production'
  status: 'Active' | 'Pending' | 'Completed' | 'Inactive'
  location: string
  startDate: string
}

export const data: Data[] = [
  {
    name: 'North Field Survey',
    holes: 19,
    type: 'survey',
    status: 'Completed',
    location: 'Zamfara',
    startDate: 'Mar 1, 2025',
  },
  {
    name: 'North Ridge Project',
    holes: 12,
    type: 'exploration',
    status: 'Active',
    location: 'Lagos',
    startDate: 'Mar 5, 2025',
  },
  {
    name: 'North Valley Ops',
    holes: 24,
    type: 'production',
    status: 'Active',
    location: 'Oyo',
    startDate: 'Mar 7, 2025',
  },
  {
    name: 'North Peak Drilling',
    holes: 11,
    type: 'exploration',
    status: 'Pending',
    location: 'Osun',
    startDate: 'Mar 3, 2025',
  },
  {
    name: 'North Coast Initiative',
    holes: 26,
    type: 'production',
    status: 'Active',
    location: 'Abeokuta',
    startDate: 'June 2, 2025',
  },
  {
    name: 'North Basin Study',
    holes: 13,
    type: 'survey',
    status: 'Completed',
    location: 'Gombe',
    startDate: 'Mar 8, 2025',
  },
  {
    name: 'North Field Operations',
    holes: 14,
    type: 'production',
    status: 'Inactive',
    location: 'Abia',
    startDate: 'April 1, 2025',
  },
]

export const colorMap = {
  survey: '#2563eb', // blue
  exploration: '#10b981', // green
  production: '#f59e0b', // amber
}
