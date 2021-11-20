import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import classNames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';

/*Internal */
import styles from './Content.module.scss';
import remarkGfm from 'remark-gfm';
import DataManager from '@api/DetailPostApi';
import moment from 'moment';

const cx = classNames.bind(styles);

type PostProps = {
	postId: string;
  };

type Post = { 
	id: string;
	tags: [];
	title: string;
	body: string;
	thumbnail:string;
	createdAt: string;
	updatedAt: string;
};

function Content({postId}:PostProps) {
	const [post, setPost] = useState<Post>();;

	const getPostOne = useCallback( async (id)=>{
		const postOne = await DataManager.getPostOne(id);
		console.log(postOne)
		setPost(postOne);
	},[]);

	useEffect(()=>{
		getPostOne(postId);
	}, [postId]);

  return (
    <div className={cx('post-detail-div')}>
       	<div className={cx('post-title-h1')}>
          	{post?.title}
        </div>
		<div className={cx('post-info')}>
			{moment(post?.createdAt).format('YYYY-MM-DD HH:mm')}
		</div>
		<div className={cx('post-tags')}>
			{
				_.map(post?.tags, t=>{
					return(
						<a className={cx('post-tag-a')} href="#">{t}</a>
					)
				})
			}
		</div>
		<div className={cx('scroll-bar')}>
			<div className={cx('wing-banner')}>
				<img
					className={cx('share-icon')}
					src='https://cdn.imweb.me/upload/S201712205a3a0910b89f5/a2470afad8a92.jpg'
					alt="profile"
				></img>
			</div>
		</div>
        <div className={cx('post-body-div')}>
			{
				post?.thumbnail && (
					<img className={cx('post-thumbnail')} alt="post-thumbnail" src={post?.thumbnail}/>
				)
			}
			<div className={cx('post-content-div')}>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{post?.body!}
				</ReactMarkdown>
			</div>
		</div>
    </div>
  );
}

export default Content;
