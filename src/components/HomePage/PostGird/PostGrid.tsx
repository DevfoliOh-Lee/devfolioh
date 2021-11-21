import classNames from 'classnames/bind';

/*Internal */
import styles from './PostGrid.module.scss';
import Post from '../Post';
import { APostType } from 'src/typings/apost.interface';
const cx = classNames.bind( styles );

interface PostGridProps {
  posts: APostType[];
}

function PostGrid({ posts }: PostGridProps ) {
    return (
        <div className={ cx( 'post-grid' ) }>
            <div className={ cx( 'scroll-container' ) }>
                <div className={ cx( 'container' ) }>
                    {posts.map( ( data ) => (
                        <Post key={ data.id } post={ data } />
                    ) )}
                </div>
            </div>
        </div>
    );
}

export default PostGrid;
