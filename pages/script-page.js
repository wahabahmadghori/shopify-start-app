import React from "react";
import gql from "graphql-tag";
import { AiFillDelete } from "react-icons/ai";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Page } from "@shopify/polaris";

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
          primary={true}
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
          >
            Create Tag
          </Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default ScriptPage;
