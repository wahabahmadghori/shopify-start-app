import React from 'react'
import gql from 'graphql-tag'
import {useQuery,useMutation} from '@apollo/react-hooks'

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
`
const Query_SCRIPTTAGS = gql`
query{
  scriptTags(first:5){
    edges{
      node {
        id
        src
        displayScope
      }
    }
  }
}
`

const ScriptPage = () => {
  const {loading,error,data} = useQuery(Query_SCRIPTTAGS)
  const [createScripts] = useMutation(CREATE_SCRIPT_TAG)

  if(loading) return <div>loading....</div>
  if(error) return <div>{error.message}</div>
  console.log(data)
    return (
        <div>
            <button type="submit" 
            onClick={()=>{
              createScripts({
                variables:{
                  input:{
                    src:"https://shopifyapp01.herokuapp.com/test-script.js",
                    displayScope: "ALL"
                  }
                }
              })
            }}>
              Creat Script Tag
            </button>
            <h2>
               Script Tags List:
            </h2>
            
            
        </div>
    )
}

export default ScriptPage
