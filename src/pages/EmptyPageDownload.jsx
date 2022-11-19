import { HiDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const EmptyPageDownload = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center flex-col">
      <div className="flex items-center justify-center bg-black-olive rounded-full w-44 h-44">
        <HiDownload className="text-9xl" />
      </div>
      <p className="text-xl pt-8 pb-40 px-14 text-quartz text-center">
        Movies and TV shows that you download appear here.
      </p>
      <Link to={'/search'}>
        <button className="bg-white rounded-md">
          <p className="py-3 px-6">Find Something to Download</p>
        </button>
      </Link>
      <Navbar page="download" />
    </div>
  );
};

export default EmptyPageDownload;
