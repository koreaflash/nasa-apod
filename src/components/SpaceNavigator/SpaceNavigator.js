import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';

const cx = classNames.bind(styles);

const SpaceNavigator = ({ onPrev, onNext }) => {
    return (
        <div className={cx('space-navigator')}>
            <div className={cx('left', 'end')}>
                <div className={cx('circle')} onClick={onPrev}>
                    <MdNavigateBefore />
                </div>
            </div>
            <div className={cx('right', 'end')}>
                <div className={cx('circle')} onClick={onNext}>
                    <MdNavigateNext />
                </div>
            </div>
        </div>
    );
}

export default SpaceNavigator;