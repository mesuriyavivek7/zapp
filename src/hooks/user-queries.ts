import { useQuery } from '@tanstack/react-query';
import { getAllAutomations } from '@/action/automations';

export const useQueryAutomations = () => {
  
    return useQuery({
      queryKey: ['get-all-automatios'],
      queryFn: getAllAutomations
    });
};
