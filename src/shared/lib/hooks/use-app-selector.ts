import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { type StateSchema } from 'app/providers/store-provider';

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
