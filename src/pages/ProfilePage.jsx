const ProfilePage = () => {
  return (
    <div className="relative">
      <div className="bg-red-100 w-full h-80 rounded relative">e</div>
      <div className="flex items-center justify-between px-4 bg-gray h-40 rounded-lg absolute -bottom-10 left-2 right-2">
        <div className="flex items-center gap-x-4">
          <div>left</div>
        </div>
        <div className="flex items-center gap-x-4">
          <div>
            <p>0</p>
            <p>Posts</p>
          </div>
          <div className="w-3 h-20 text-gray"></div>
          <div>
            <p>0</p>
            <p>Comments</p>
          </div>
          <div>
            <p>82.6K</p>
            <p>Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
