import { useParams } from 'react-router-dom';

export function useParseLinkWithParams(link: string) {
  const params = useParams();
  let parsedLink = '';
  let hash = '';

  const start = link.match(/:/)?.index;
  hash = link.slice(start + 1);

  const end = hash.match(/\//)?.index;
  hash.slice(0, end || hash.length - 1);

  parsedLink = link.replace(`:${hash}`, params[hash]);
  return parsedLink;
}
