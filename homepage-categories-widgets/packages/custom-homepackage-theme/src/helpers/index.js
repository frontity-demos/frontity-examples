import {categoriesWidgetsHome} from '../config'

// export const getCategoriesIds = categories => Object.keys(categories)
// export const getCategoriesValues = categories => Object.keys(categories)

export const getPostsFromCategory = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(+categoryId) )

export const getPostsGroupedByCategory = source =>  {
  return Object.keys(categoriesWidgetsHome).reduce((acc, categoryId) => {
    const posts = getPostsFromCategory(source, categoryId).slice(0,5)
    const category = source.category[categoryId] 
    return [{posts, category}, ...acc]
  }, [])
}

export const createMarkupObject = renderedHtml => ({__html: renderedHtml})

export const getRandomColor = () =>
  '#' + new Array(6).fill(0).map(digit => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join('')  