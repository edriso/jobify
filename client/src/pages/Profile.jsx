import { Form, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/styledWrappers/DashboardFormPage';
import apiHandler from '../utils/apiHandler';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('avatar');
    if (file && file.size > 500000) {
      toast.error('Image size too large');
      return null;
    }
    try {
      await apiHandler.patch('/users/update-user', formData);
      queryClient.invalidateQueries(['user']);
      toast.success('Profile updated successfully');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

function Profile() {
  const { user } = useOutletContext();
  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              select an image file (max 0.5 MB)
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow name="name" defaultValue={user.name}></FormRow>
          <FormRow name="lastName" defaultValue={user.lastName}></FormRow>
          <FormRow
            type="email"
            name="email"
            defaultValue={user.email}
          ></FormRow>
          <FormRow name="location" defaultValue={user.location}></FormRow>
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
}
export default Profile;
