
const postsRequest = {
    fetchAllPosts : '/post',
    fetchAllTrendingPosts : '/post/trending',
    fetchAllPostsByUsername : '/post/username',
    fetchAllPostsByCategory : '/post',
    fetchAllPostsByTitle : '/post/search',
    fetchPostById : '/post/id',
    savePost : '/post',
    updatePost : '/post/id',     
}

const commentsRequest = {
    fetchAllComments : '/comment',
    fetchCommentById : '/comment',
    saveComment : '/comment',
    updateComment:'/comment',
    deleteComment : '/comment'
} 

const categoryRequest = {
    fetchAllCategories : '/category'
}

export {postsRequest} ; 
export {commentsRequest}; 
export {categoryRequest}; 