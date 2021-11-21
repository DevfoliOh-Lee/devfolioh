import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import classNames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';
import { AiFillSmile } from "react-icons/ai";

/*Internal */
import styles from './Content.module.scss';
import remarkGfm from 'remark-gfm';
import DataManager from '@api/DetailPostApi';
import moment from 'moment';

const cx = classNames.bind( styles );

type PostProps = {
	postId: string;
};

type Comment = {
	body: string;
	createdAt: string;
}

type Post = { 
	id: string;
	tags: [];
	title: string;
	body: string;
	thumbnail:string;
	createdAt: string;
	updatedAt: string;
};

function Content({ postId }:PostProps ) {
    const [ post, setPost ] = useState<Post>();
    const [ comments, setComments ] = useState<Comment[]>([]);
    const [ comment, setComment ] = useState<string>( '' );
    const [ commentCnt, setCommentCnt ] = useState<number>( 0 );

    const getPostOne = useCallback( async ( id )=>{
        try {
            const postOne = await DataManager.getPostOne( id );
            setPost( postOne );
        } catch ( e:any ) {
            alert( e.message );
            window.location.href = '/';
        }
    },[]);

    const getComments = useCallback( async ( id )=>{
        const commentArr = await DataManager.getComments( id );
        setComments( commentArr.results );
        setCommentCnt( commentArr.totalResults )
    },[]);

    const onClickBtnCommentSubmit = useCallback( async ()=>{

        if ( _.isEmpty( comment ) ) {
            alert( '댓글을 작성해주세요.' );

            return;
        }

        const body = {
            postId:postId,
            body:comment
        };

        await DataManager.postCommentOne( body );

        setComment( '' )
        getComments( postId );

    },[ comment, postId, getComments ]);

    const onClickBtnDelete = useCallback( async()=>{
        try {
            await DataManager.deletePostOne( postId );
        } catch( e:any ) {
            alert( e.message );
            window.location.href = '/';
        }
    },[ postId ])

    useEffect( ()=>{
        getPostOne( postId );
        getComments( postId );
    }, [ postId, getPostOne, getComments ]);

    return (
        <div className={ cx( 'post-detail-div' ) }>
            <div className={ cx( 'post-title-h1' ) }>
                {post?.title}
            </div>
            <div className={ cx( 'post-info' ) }>
                {moment( post?.createdAt ).format( 'YYYY-MM-DD HH:mm' )}
            </div>
            <div className={ cx( 'post-tags' ) }>
                {
                    _.map( post?.tags, t=>{
                        return(
                            <a className={ cx( 'post-tag-a' ) } href="#">{t}</a>
                        )
                    })
                }
            </div>
            {/* <div className={cx('scroll-bar')}>
			<div className={cx('wing-banner')}>
				<img
					className={cx('share-icon')}
					src='https://cdn.imweb.me/upload/S201712205a3a0910b89f5/a2470afad8a92.jpg'
					alt="profile"
				></img>
			</div>
		</div> */}
            <div className={ cx( 'post-body-div' ) }>
                {
                    post?.thumbnail && (
                        <img className={ cx( 'post-thumbnail' ) } alt="post-thumbnail" src={ post?.thumbnail }/>
                    )
                }
                <div className={ cx( 'post-content-div' ) }>
                    <ReactMarkdown remarkPlugins={ [ remarkGfm ] }>
                        {post?.body!}
                    </ReactMarkdown>
                </div>
            </div>
            <div className={ cx( 'post-detail-btns' ) }>
                <button className={ cx( 'post-btn' ) }>수정</button>
                <button className={ cx( 'post-btn' ) } onClick={ onClickBtnDelete }>삭제</button>
            </div>
            <div className={ cx( 'post-comment-div' ) }>
                <h4>
                    {commentCnt} 댓글
                </h4>
                <textarea
                    className={ cx( 'comment-textarea' ) }
                    placeholder="댓글을 작성해주세요."
                    value={ comment }
                    onChange={ ( e )=>{setComment( e.target.value )} }
                />
                <div className={ cx( 'btn-comment-div' ) }>
                    <button className={ cx( 'btn-comment-submit','post-btn' ) } onClick={ onClickBtnCommentSubmit }>댓글 작성</button>
                </div>
                <div className={ cx( 'comments-div' ) }>
                    {
                        _.map( comments, c=>{
                            return(
                                <div className={ cx( 'comment-div' ) }>
                                    <div className={ cx( 'comment-created-date' ) }>
                                        {moment( c.createdAt ).format( 'YYYY-MM-DD HH:mm' )}
                                    </div>
                                    <AiFillSmile className={ cx( 'comment-icons' ) }/>
                                    <div className={ cx( 'comment-body' ) }>{c.body}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Content;
