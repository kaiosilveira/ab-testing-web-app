import { useFeatureFlag } from '../../utils/feature-flags';

const experimentKey = 'tasks';
export const useTasksExperiment = () => {
  const expInfo = useFeatureFlag(experimentKey);
  return { shouldDisplay: expInfo?.variant === 1 };
};
