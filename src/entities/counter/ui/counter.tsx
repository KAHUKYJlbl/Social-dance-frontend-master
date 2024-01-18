import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { useAppSelector } from 'shared/lib/hooks/use-app-selector';
import { Button } from 'shared/ui/button';
import { Text } from 'shared/ui/text';

import { getCounterValue } from '../model/selectors';
import { counterActions } from '../model/slice/counter-slice';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <Text title={String(value)} TitleTag='h2' text='counter text' />
      <Button disabled onClick={increment}>
        increment
      </Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};
