import classNames from 'classnames/bind';

/*Internal */
import styles from './PostGrid.module.scss';
import Post from '../Post';
import { Link } from 'react-router-dom';

const cx = classNames.bind( styles );

function PostGrid() {
    return (
        <div className={ cx( 'scroll-container' ) }>
            <div className={ cx( 'container' ) }>
                <Link to='/post/61988f1d7ae07b002b723b92'><Post /></Link>
                <Link to='/post/6199325e50de98002b5e609b'><Post /></Link>
                <Link to='/post/6197a7729b8427002bae0c2c'><Post /></Link>
                <Link to='/post/61988f1d7ae07b002b723b92'><Post /></Link>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default PostGrid;
