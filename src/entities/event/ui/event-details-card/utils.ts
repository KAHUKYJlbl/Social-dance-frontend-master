export const normalizeAddress = (
  address: string | null,
  place: string | null,
  city: string,
): string => {
  const addressName = address ? `, ${address}` : '';
  const placeName = place ? `, ${place}` : '';

  return `${city}${addressName}${placeName}`;
};
