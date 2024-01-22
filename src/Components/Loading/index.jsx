import {Puff} from 'react-loader-spinner';

const Loading = () => {
    return (
      <div className="loading">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{ position: "absolute", top: "50%", left: "50%" }}
        />
      </div>
    );
    }

export default Loading;