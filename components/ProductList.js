import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'
import {Card,ResourceList,ResourceItem,Stack,TextStyle,Thumbnail} from '@shopify/polaris'
import store from 'store-js'

const GET_PRODUCTS_BY_IDS = gql`
query getProducts($ids:[ID!]!){
	nodes(ids:$ids){
    ...on Product{
      title
      handle
      id
      images(first:1){
        edges{
          node{
            originalSrc
            altText
          }
        }
      }
      variants(first:1){
        edges{
          node{
            price
            id
          }
        }
      }
    }
  }
}
`
function ProductList(){
  const {loading,error,data} = useQuery(GET_PRODUCTS_BY_IDS,{variables:{ids:store.get('ids')}})
  if(loading){return <div>loading...</div>}
  if(error){return <div>{error.message}</div>}
  console.log('data: ',data)
  return(
    <Card>
  <ResourceList
    showHeader="true"
    resourceName={{singular: 'Product', plural: 'Products'}}
    items={data.nodes}
    renderItem={(item) => {
      const media = (
        <Thumbnail 
        source={item.images.edges[0]?item.images.edges[0].node.originalSrc:""}
         alt={item.images.edges[0]?item.images.edges[0].node.altText:""} 
         size="small" />
      );
      return (
        <ResourceItem
          id={item.id}
          media={media}
          accessibilityLabel={`View details for ${item.title}`}
        >
          <Stack>
            <Stack.Item fill>
              <h2>
              <TextStyle variation="strong">{item.title}</TextStyle>
              </h2>
            </Stack.Item>
            <Stack.Item>
              <p>${item.variants.edges[0].node.price}</p>
            </Stack.Item>
        </Stack>
        </ResourceItem>
      );
    }}
  />
</Card>
  )
}

export default ProductList;