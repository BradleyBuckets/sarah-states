let Audio = ({songTitle, source}) => {
    return (
        <div className="sm-1">
            <p className="text-neutral-50 opacity-70 text-sm mx-4 my-1">{songTitle}</p>
            <audio src={source} controls className="w-full opacity-50"></audio>
        </div>
    );
  };

export default Audio