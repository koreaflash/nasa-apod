import classNames from 'classnames/bind';
import styles from './Viewer.scss';
import { ChasingDots } from 'better-react-spinkit';

const cx = classNames.bind(styles);

const Viewer = ({ mediaType, url, loading }) => {
    if (loading) {
        return (
            <div className={cx('viewer')}>
                <ChasingDots color="white" size={60} />
            </div>
        );
    }

    return (
        <div className={cx('viewer')}>
            {
                mediaType === 'image'
                    ? (<img onClick={() => window.open(url)} src={url} alt="space" />)
                    : (<iframe title="Space Video" src={url} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>)
            }
        </div>
    );
}

export default Viewer;