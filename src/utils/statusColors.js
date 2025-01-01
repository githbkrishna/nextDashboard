export const getStatusColor = (status) => {
  switch (status) {
    case 'Running':
      return 'bg-green-700 text-black-600';
    case 'Not Running':
      return 'bg-gray-100 text-black-600';
    case 'No Data':
      return 'bg-yellow-400 text-black-600';
    default:
      return 'bg-gray-100 text-black-600';
  }
};