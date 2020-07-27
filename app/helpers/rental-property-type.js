import { helper } from '@ember/component/helper';

const communityPropertyTypes = ['Condo', 'Townhouse', 'Apartment'];

export function rentalPropertyType([property]) {
  if (communityPropertyTypes.includes(property)) {
    return 'Community';
  } else {
    return 'Standalone';
  }
}

export default helper(rentalPropertyType);
