import { useDispatch } from 'react-redux';
import { type AppDispatch } from 'app/providers/store-provider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
