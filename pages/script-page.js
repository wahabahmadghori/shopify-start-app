import React from "react";
import gql from "graphql-tag";
import { AiFillDelete } from "react-icons/ai";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Page,Layout,Card, Stack,Button,ResourceList,ResourceItem } from "@shopify/polaris";

const CREATE_SCRIPT_TAG = gql`
  mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;
const Query_SCRIPTTAGS = gql`
  query {
    scriptTags(first: 5) {
      edges {
        node {
          id
          src
          displayScope
        }
      }
    }
  }
`;
const DELETE_SCRIPTTAGS = gql(`
mutation scriptTagDelete($id: ID!) {
  scriptTagDelete(id: $id) {
    deletedScriptTagId
    userErrors {
      field
      message
    }
  }
}
`);

const ScriptPage = () => {
  const { loading, error, data } = useQuery(Query_SCRIPTTAGS);
  const [createScripts] = useMutation(CREATE_SCRIPT_TAG);
  const [deleteScripts] = useMutation(DELETE_SCRIPTTAGS);

  if (loading) return <div>loading....</div>;
  if (error) return <div>{error.message}</div>;
  console.log(data);
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card title="Script Page" sectioned>
            <p>Create Script Tag</p>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
          <Button 
          size="slim" 
          secondary
          onClick={()=>{
            createScripts({
              variables:{
                input:{
                  src:"https://shopifyapp01.herokuapp.com/test-script.js",
                  displayScope: "ALL"
                }
              },
              refetchQueries:[{query:Query_SCRIPTTAGS}]
            })
          }}>
            Create Tag
          </Button>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card>
          <ResourceList
    resourceName={{singular: 'Script', plural: 'Scripts'}}
    items={data.scriptTags.edges}
    renderItem={(item) => {

      return (
        <ResourceItem
        id={item.node.id}>
         <Stack>
           <Stack.item>
             <p>{item.node.id}</p>
           </Stack.item>
           <Stack.item> 
            <Button outline 
            onClick={()=>{
                  deleteScripts({
                    variables:{
                      id:edge.node.id
                    },
                    refetchQueries:[{query:Query_SCRIPTTAGS}]
                  })
                }}>Add product</Button>
           </Stack.item>
         </Stack>
        </ResourceItem>
      );
    }}
  />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default ScriptPage;
