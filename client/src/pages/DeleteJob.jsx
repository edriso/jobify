import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiHandler from '../utils/apiHandler';

export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await apiHandler.delete(`/jobs/${params.id}`);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job deleted successfully');
    } catch (error) {
      toast.error('Could not delete that job');
    }
    return redirect('/dashboard/all-jobs');
  };
