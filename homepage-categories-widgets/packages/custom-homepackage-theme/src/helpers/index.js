import {categoriesWidgetsHome} from '../config'
const MAXIMUM_POSTS = 5

const getPostsFromCategory = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(parseInt(categoryId)) )

export const getPostsGroupedByCategory = source =>  {
  return Object.values(categoriesWidgetsHome)
    .reduce((acc, categoryId) => {
      const posts = getPostsFromCategory(source, categoryId).slice(0,MAXIMUM_POSTS)
      const category = source.category[categoryId] 
      return [...acc, {posts, category}]
    }, [])
}