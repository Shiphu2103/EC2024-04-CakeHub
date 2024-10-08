// src/components/LoginForm.tsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import ToastComponent from '../components/ToastComponent';

const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = { username, password };

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, auth);
      sessionStorage.setItem('userInfo', JSON.stringify(response.data.session));
      const userInfo = JSON.stringify(response.data.session);
      sessionStorage.setItem('userInfo', userInfo);

      const role = JSON.parse(userInfo).role;
      let authToken = 'guest';

      if (role === 'admin') {
        authToken = 'admin_logged';
        sessionStorage.setItem('authToken', authToken);
        toast.success('Đăng nhập thành công');
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1500);
      } else if (role === 'baker') {
        authToken = 'baker_logged';
        sessionStorage.setItem('authToken', authToken);
        toast.success('Đăng nhập thành công');
        setTimeout(() => {
          navigate('/baker/dashboard');
        }, 1500);
      } else {
        authToken = 'user_logged';
        sessionStorage.setItem('authToken', authToken);
        toast.success('Đăng nhập thành công');
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 1500);
      }
    } catch (err) {
      toast.error('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-3/5 overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="w-1/2">
          <img src={'../../assets/cake/login.jpg'} alt="Login" className="h-full w-full object-cover" />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="mb-6 text-2xl font-semibold text-black">Đăng nhập</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Tên đăng nhập</label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Tên đăng nhập"
                name="username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Mật khẩu</label>
              <input
                type="password"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Mật khẩu"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="mt-4 w-full">
              ĐĂNG NHẬP
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Chưa có tài khoản?{' '}
              <a href="/signup" className="text-primary-500">
                Đăng ký
              </a>
            </p>
          </div>
        </div>
      </div>
      <ToastComponent />
    </div>
  );
};

export default LoginForm;
